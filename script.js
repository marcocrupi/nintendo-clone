/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myOverlay").style.display = "none";
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
const subMenuMobile = document.getElementById("myDropdown");
const searchB = document.getElementById("searchButton");

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

// FULL SCREEN SEARCH BOX
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  subMenuMobile.classList.remove("show");
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// BLACK SCREEN
function openBlack() {
  document.getElementById("blackScreen").style.visibility = "visible";
}

function closeBlack() {
  document.getElementById("blackScreen").style.visibility = "hidden";
}