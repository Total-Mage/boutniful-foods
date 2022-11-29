// Toggle Hamburger Menu
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.classList.add("responsive");
    } else {
      x.className = "topnav";
    }
  }

// Last Modified Date
let lastMod = new Date(document.lastModified);
let currentCopy = new Date().getFullYear();

let modifiedDate = document.querySelector(".last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();

// -------------- Lazy Loading -------------- 
// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () =>{
        image.removeAttribute('data-src');
        image.className = "loaded";
    };
}
// Check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
      
    });
  }

  // Smoothies animation
const ctaEl = document.getElementById("cta");
const bSmoothieEl = document.getElementById("blue-smoothie");
const oSmoothieEl = document.getElementById("orange-smoothie");

ctaEl.addEventListener('mouseenter', () =>{
  bSmoothieEl.classList.add("bounce-blue");
  setTimeout(()=>{
    oSmoothieEl.classList.add("bounce-orange")
  }, 500);
});

ctaEl.addEventListener('mouseleave', () =>{
  bSmoothieEl.classList.remove("bounce-blue");
  oSmoothieEl.classList.remove("bounce-orange");
});


// Map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;