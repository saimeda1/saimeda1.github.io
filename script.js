// script.js
import slick from 'slick-carousel';

document.addEventListener('DOMContentLoaded', function() {
  (function($) {
    $(document).ready(function() {
        $('.portfolio-slider').slick({
            dots: true,
            infinite: true,
            cssEase: 'linear',
            swipe: false,
        });
    });
	
})( jQuery ); 
  // Toggle navigation for smaller screens
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  // Dropdown functionality
  const dropbtn = document.querySelector('.dropbtn');
  dropbtn.onclick = function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
  }

  // Close the dropdown if clicked outside
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

  // Character count warning
  document.getElementById('message').addEventListener('input', function () {
    var message = this.value;
    var warning = document.getElementById('message-warning');
    if (message.length > 250) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
  });

  // Slider functionality
  let index = 0; // Current slide index
  function moveSlide(step) {
    let slides = document.querySelectorAll('.portfolio-thumb');
    if (slides.length === 0) return;
    
    // Hide current slide and calculate next slide index
    slides[index].classList.remove('active');
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  // Initialize first slide as active and attach click events for navigation
  let slides = document.querySelectorAll('.portfolio-thumb');
  if (slides.length > 0) slides[0].classList.add('active');
  
  document.querySelector('.slide-left').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.slide-right').addEventListener('click', () => moveSlide(1));
});

$(document).ready(function(){
  $('#portfolio-slider').slick({
    infinite: true,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});