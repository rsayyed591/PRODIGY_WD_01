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
