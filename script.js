const marker = document.getElementById('marker');
const infoBox = document.getElementById('info-box');

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