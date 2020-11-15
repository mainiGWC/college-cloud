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
