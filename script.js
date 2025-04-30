// Select all markers and info boxes
const markers = document.querySelectorAll('.marker');
const infoBoxes = document.querySelectorAll('.info-box');

// Loop through each marker and add event listeners
markers.forEach((marker, index) => {
  const infoBox = infoBoxes[index];  // Get the corresponding info-box

  marker.addEventListener('mouseover', () => {
    infoBox.style.display = 'block';
  });

  marker.addEventListener('mousemove', (e) => {
    // Update the position of the info box based on the mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Adjust the info box position slightly to the right and below the cursor
    infoBox.style.left = mouseX + 10 + 'px';
    infoBox.style.top = mouseY + 10 + 'px';
  });

  marker.addEventListener('mouseout', () => {
    infoBox.style.display = 'none';
  });
});
// Function to show a page and hide the others
function showPage(pageId) {
  // Hide all sections
  let sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');
  
  // Show the selected page
  document.getElementById(pageId).style.display = 'block';

  // Add the 'homepage' class if we're on the homepage
  if (pageId === 'home') {
      document.body.classList.add('homepage');
  } else {
      document.body.classList.remove('homepage');
  }
}

// Make sure the homepage shows by default on page load
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
function showPage(pageId) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected section
  const activeSection = document.getElementById(pageId);
  if (activeSection) activeSection.style.display = 'block';

  // Toggle body class based on current page
  if (pageId === 'home') {
      document.body.classList.add('homepage');
  } else {
      document.body.classList.remove('homepage');
  }
}

// Make sure the homepage shows up on initial load
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
function showPage(pageId) {
  let sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}
function showPage(pageId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.classList.remove('active'));

  const activeSection = document.getElementById(pageId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

window.onload = () => showPage('home');