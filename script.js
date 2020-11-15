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

/*Animation for slideshow in testing page*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}