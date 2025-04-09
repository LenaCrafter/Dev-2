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
