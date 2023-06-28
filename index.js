// Get all the icon elements
const icons = document.querySelectorAll('.shake');

// Add event listeners to each icon
icons.forEach(icon => {
  // Add the shake class when the mouse enters
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('shake-icon');
  });

  // Remove the shake class when the mouse leaves
  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('shake-icon');
  });
});
