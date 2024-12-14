let auth0Client = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();

  document.getElementById("btn-logout").hidden = !isAuthenticated;
  document.getElementById("btn-login").hidden = isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content").classList.remove("hidden");

    document.getElementById("ipt-access-token").innerHTML =
      await auth0Client.getTokenSilently();

    document.getElementById("ipt-user-profile").textContent = JSON.stringify(
      await auth0Client.getUser()
    );
  } else {
    document.getElementById("gated-content").classList.add("hidden");
  }
};

window.onload = async () => {
  await configureClient();

  updateUI();

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    return;
  }

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0Client.handleRedirectCallback();

    updateUI();

    window.history.replaceState({}, document.title, "/");
  }
};

const login = async () => {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  });
};

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};
