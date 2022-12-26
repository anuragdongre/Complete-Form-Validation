// Select the form element
const form = document.querySelector("#signup-form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the input fields
  const username = form.elements.username.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const confirmPassword = form.elements.confirmPassword.value;

  // Check if any of the fields are empty
  if (!username || !email || !password || !confirmPassword) {
    // If any of the fields are empty, show an error message
    alert("Please fill out all fields.");
    return;
  }

  // Check if the password and confirm password fields match
  if (password !== confirmPassword) {
    // If the password and confirm password fields do not match, show an error message
    alert("Passwords do not match.");
    return;
  }

  // Validate the password using a regular expression
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    // If the password does not meet the requirements, show an error message
    alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.");
    return;
  }

  // If all validation checks pass, show a success message
  alert("Sign up successful!");
});