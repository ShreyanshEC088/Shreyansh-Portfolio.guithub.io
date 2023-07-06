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
function copyToEmail() {
  // Get the message and subject entered by the user
  var message = document.getElementById("message").value;
  var subject = document.getElementById("project").value;

  // Open Gmail and populate the email text area with the message and subject
  var emailBody = encodeURIComponent(message);
  var mailtoLink = "mailto:shreyansh06001@gmail.com?body=" + emailBody;

  // Include the subject if it is provided
  if (subject) {
    var encodedSubject = encodeURIComponent(subject);
    mailtoLink += "&subject=" + encodedSubject;
  }

  // Open the email client
  window.location.href = mailtoLink;
}
