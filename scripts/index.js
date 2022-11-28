// Toggle Hamburger Menu
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.classList.add("responsive");
    } else {
      x.className = "topnav";
    }
  }