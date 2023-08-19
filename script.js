document.addEventListener("DOMContentLoaded", function() {
  // Navbar menu scrolling
  const navbarMenuItems = document.querySelectorAll(".navbar-menu li a");
  
  navbarMenuItems.forEach(item => {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetSection = document.querySelector(this.getAttribute("href"));
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Smooth scrolling for "Get Started" buttons
  const startButtons = document.querySelectorAll(".start-button");
  
  startButtons.forEach(button => {
    button.addEventListener("click", function() {
      const target = this.getAttribute("data-target");
      if (target) {
        const targetSection = document.getElementById(target);
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

"use strict";

var contactForm = function() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var submitButton = document.querySelector('.submitting');
            var waitText = 'Submitting...';

            submitButton.style.display = 'block';
            submitButton.textContent = waitText;

            setTimeout(function() {
                submitButton.style.display = 'none';
                submitButton.textContent = waitText;

                var successMessage = document.getElementById('form-message-success');
                successMessage.style.display = 'block';

                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 3000);
            }, 2000);
        });
    }
};
contactForm();
