/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var fold = document.getElementByClassName("folding");
var i;

for(i = 0; i < fold.length; i++) {
  fold[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var board = this.nextElementSibling;
    if (board.style.maxHeight) {
      board.style.maxHeight = null;
    } else {
      board.style.maxHeight = board.scrollHeight + "%";
    }
  });
}
