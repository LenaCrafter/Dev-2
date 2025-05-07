function showPage(pageId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');
  const page = document.getElementById(pageId);
  if (page) page.style.display = 'block';

  // Toggle homepage class
  if (pageId === 'home') {
    document.body.classList.add('homepage');
  } else {
    document.body.classList.remove('homepage');
  }
}
window.onload = function() {
  showPage('home'); // Show only the homepage on first load
};
// Function to create a leaf
function createLeaf() {
  const leaf = document.createElement("img");
  leaf.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa9a0305-0096-45bd-90b2-a7a96261419a/djpd8op-d1edd809-6e9c-4ff9-8a4e-12ce53b742c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhOWEwMzA1LTAwOTYtNDViZC05MGIyLWE3YTk2MjYxNDE5YVwvZGpwZDhvcC1kMWVkZDgwOS02ZTljLTRmZjktOGE0ZS0xMmNlNTNiNzQyYzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.05eGb6s2TkbQk-TXFkBq5fwiswYDuBMYIQUh211IJGk"; // Replace with your image URL
  leaf.className = "falling-leaf";

  // Set random starting and ending positions for each leaf
  const randX = Math.random();
  const randXEnd = Math.random();

  // Add the custom properties for CSS
  leaf.style.setProperty('--rand-x', randX);
  leaf.style.setProperty('--rand-x-end', randXEnd);

  // Append the leaf to the container
  document.getElementById("falling-leaves-container").appendChild(leaf);

  // Remove the leaf after animation
  setTimeout(() => leaf.remove(), 6000); // Matches the duration of the animation
}

// Create a leaf every 500 milliseconds
setInterval(createLeaf, 500);
