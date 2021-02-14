
//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {

  showSlides(slideIndex += x);
}
 

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("ImageSlide");//T
if (x > slides.length) { slideIndex = 1 }   
  if (x < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
// display
  slides[slideIndex-1].style.display = "block";  
  


//slide image car reservation
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slid");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}
}