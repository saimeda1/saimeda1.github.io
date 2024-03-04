// script.js
import slick from 'slick-carousel';

//
document.addEventListener('DOMContentLoaded', function() {
  
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
  });

 // Get the element with class="dropbtn" (the dropdown button)
var dropbtn = document.querySelector('.dropbtn');

// Toggle the dropdown menu's visibility when clicking on the button
dropbtn.onclick = function() {
  document.querySelector('.dropdown-content').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 document.getElementById('message').addEventListener('input', function () {
    var message = this.value;
    var warning = document.getElementById('message-warning');
    if (message.length > 250) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});
let index = 0;

function moveSlide(step) {
  let slides = document.getElementsByClassName('slide');
  if (slides.length === 0) return;
  
  slides[index].classList.remove('active');
  index = (index + step + slides.length) % slides.length; // Loop around
  slides[index].classList.add('active');
}

// Initialize first slide as active
document.addEventListener('DOMContentLoaded', function() {
  let slides = document.getElementsByClassName('slide');
  if (slides.length > 0) slides[0].classList.add('active');
});