//---------------hamburger----------------//
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");
a.forEach(function(element){

element.addEventListener("click",function(){
  document.querySelector(".navbar").classList.toggle("show");
})

})
const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
  document.querySelector(".navbar").classList.toggle("show");
})
//---------------hamburger----------------//




//---------------scroll to top----------------//

const toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
//---------------end scroll to top----------------//


//---------------start  blog----------------//
//Modals for blogs

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("post1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}