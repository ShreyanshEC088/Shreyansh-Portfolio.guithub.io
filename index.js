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
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#back-to-top-btn').fadeIn();
    } else {
      $('#back-to-top-btn').fadeOut();
    }
  });

  $('#back-to-top-btn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}); */}