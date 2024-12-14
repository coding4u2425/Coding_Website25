// Scroll to Top Button

let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  searchToggle = document.querySelector(".searchToggle");

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// Toggle Navbar

function myFunction() {
  var x = document.getElementById("navlist-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// search function

var $ = jQuery;
$(function () {
  var availableTags = [
    { value: "C Tutorial", link: "/c_tutorial/c_introduction.html" },
    { value: "C Projects", link: "/projects/c_projects.html" },
    { value: "Python Tutorial", link: "/python_tutorial/python_intro.html" },
    { value: "Python Projects", link: "/projects/python_projects.html" },
    { value: "Java", link: "/java_tutorial/java-intro.html" },
    { value: "HTML", link: "/html_tutorial/html-intro.html" },
    { value: "CSS", link: "/css_tutorial/css-intro.html" },
    { value: "HTML & CSS Projects", link: "/projects/html_css_projects.html" },
    { value: "JavaScript Tutorial", link: "/js_tutorial/js-intro.html" },
    { value: "JavaScript Projects", link: "/projects/js_projects.html" },
  ];
  $("#input-box").autocomplete({
    source: availableTags,
    select: function (event, ui) {
      console.log(ui.item.link);
      window.location.replace(ui.item.link);
    },
  });
});