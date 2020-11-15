/* Animation for drop down menus on Testing page */
var fol = document.getElementsByClassName("folding");
var i;

for (i = 0; i < fol.length; i++) {
  fol[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var board = this.nextElementSibling;
    if (board.style.display === "block") {
      board.style.display = "none";
    } else {
      board.style.display = "block";
    }
  });
}

/* Animation for drop down menus on FAQs page */
var fol = document.getElementsByClassName("foldingFAQ");
var i;

for (i = 0; i < fol.length; i++) {
  fol[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var board = this.nextElementSibling;
    if (board.style.display === "block") {
      board.style.display = "none";
    } else {
      board.style.display = "block";
    }
  });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyScroll()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
