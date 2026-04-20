// Handle the contact form submission
function handleSubmit(event) {
  event.preventDefault(); // Stop the page from reloading

  const name = document.getElementById("name").value;
  const feedback = document.getElementById("form-feedback");

  feedback.textContent = `Thanks, ${name}! Your message was received. (This is just a demo.)`;
  feedback.classList.remove("hidden");

  event.target.reset(); // Clear the form fields
}
