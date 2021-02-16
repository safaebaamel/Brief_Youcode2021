// //slider
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(x) {

//   showSlides(slideIndex += x);
// }


// function showSlides(x) {
//   var i;
//   var slides = document.getElementsByClassName("ImageSlide"); //T
//   if (x > slides.length) {
//     slideIndex = 1
//   }
//   if (x < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // display
//   slides[slideIndex - 1].style.display = "block";



//   //slide image car reservation
//   var myIndex = 0;
//   carousel();

//   function carousel() {
//     var i;
//     var x = document.getElementsByClassName("slid");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//       myIndex = 1
//     }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 2500);
//   }
// }

// prompt contact us page
function MessageChannelbox() {
  var a = document.getElementById('name').value
  var b = document.getElementById('mail').value
  var c = document.getElementById('subj').value
  alert("Thank you Mr/Mrs " + a + " for your message." + "\nEmail: " + b + "\nsubject: " + c);
}



// reservation algorithm :)) 

function reservation() {
  var som = 0;
  var dd = document.getElementsById('cars').value
  var dd3 = document.getElementById('cars3').value
  var dd2 = document.getElementById('cars2').value

  switch (dd) {
    case "moto":
      som += 10;
      switch (dd3) {
        case "electrique":
          som += 0.05;
          break;
        case "essence":
          som += 0.14;
          break;
        default:
          document.write("Sorry, wrong choice");
      }
      case "citadine":
        som += 12;
        switch (dd3) {
          case "hybride":
            som += 0.09;
            break;
          case "diesel":
            som += 0.21;
            break;
          case "essence":
            som += 0.14;
            break;
          default:
            document.write("Sorry, wrong choice");
        }
        case "compact":
          som += 14;
          switch (dd3) {
            case "hybride":
              som += 0.09;
              break;
            case "diesel":
              som += 0.21;
              break;
            case "essence":
              som += 0.14;
              break;
            default:
              document.write("Sorry, wrong choice");
          }
          case "utilitaire":
            som += 16;
            switch (dd3) {
              case "diesel":
                som += 0.21;
                break;
              default:
                document.write("Sorry, wrong choice");
            }
            case "engin":
              som += 900;
              switch (dd3) {
                case "diesel":
                  som += 0.21;
                  break;
                case "essence":
                  som += 0.14;
                  break;
                default:
                  document.write("Sorry, wrong choice");
              }
              case "berlin":
                som += 20;
                switch (dd2) {
                  case "auto":
                    som += 0.19;
                    switch (dd3) {
                      case "essence":
                        som += 0.14;
                        break;
                      case "diesel":
                        som += 0.21;
                        break;
                      default:
                        document.write("Sorry, wrong choice");
                    }
                    case "manual":
                      switch (dd3) {
                        case "essence":
                          som += 0.14;
                          break;
                        case "diesel":
                          som += 0.21;
                          break;
                        default:
                          document.write("Sorry, this choice is unavailable!!");
                      }
                      default:
                        document.write("Sorry, unavailable choice!!");
                }
                case "camion":
                  som += 250;
                  switch (dd2) {
                    case "auto":
                      som += 19;
                      switch (dd3) {
                        case "diesel":
                          som += 0.21;
                          break;
                        default:
                          document.write("Sorry, unavailable choice");
                      }
                      default:
                        document.write("Sorry, choice unavailable");
                  }
                  default:
                    document.write("Sorry, unavailable choice")
  }
  alert(som);
}