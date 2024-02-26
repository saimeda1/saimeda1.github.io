// script.js

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
