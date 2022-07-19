/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   console.log("test");
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("mobileSubMenu");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   } 
  // }

// CODICE JAVASCRIPT PER ANIMAZIONE TOGGLE
const header = document.getElementById("mobileNav");
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("mobileNavBar");

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
