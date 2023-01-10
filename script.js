// Get references to the sections
const portrait = document.querySelector("#portrait");
const landscape = document.querySelector("#landscape");
const videos = document.querySelector("#videos");

// Set up a variable to keep track of the current section
let currentSection = portrait;

// Use the Hammer.js library to set up a swipe event for the sections
const hammertime = new Hammer(document.body);

// Swipe left event
hammertime.on("swipeleft", () => {
  // Check if the current section is not the videos section
  if (currentSection !== videos) {
    currentSection.classList.add("hidden");
    currentSection = currentSection.nextElementSibling;
    currentSection.classList.remove("hidden");
  }
});

// Swipe right event
hammertime.on("swiperight", () => {
  // Check if the current section is not the portrait section
  if (currentSection !== portrait) {
    currentSection.classList.add("hidden");
    currentSection = currentSection.previousElementSibling;
    currentSection.classList.remove("hidden");
  }
});
