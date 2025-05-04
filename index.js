// question one: Event handling
// This function changes the theme of the page when the button is clicked
function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let firstButton = document.querySelector("#first-button");
firstButton.addEventListener("click", changeTheme);

// This function adds a hover effect to the
function hoverEffect() {
  let firstButton = document.querySelector("#first-button");

  firstButton.addEventListener("mouseover", () => {
    firstButton.style.backgroundColor = "lightblue"; // Change background color on hover
  });

  firstButton.addEventListener("mouseout", () => {
    firstButton.style.backgroundColor = ""; // Reset background color when not hovering
  });
}
hoverEffect(); // Call the function to add hover effect

// This function detects key presses and logs them to the console
function detectKeyPress() {
  document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`); // Logs the key pressed to the console
    let keyPressDisplay = document.querySelector("#key-press-display");
    if (keyPressDisplay) {
      keyPressDisplay.innerHTML = `You pressed: ${event.key}`;
    }
  });
}

// Call the function to enable key press detection
detectKeyPress();

// This function detects double-clicks on the button and displays an alert
function handleDoubleClick() {
  let topButtonElement = document.querySelector("#first-button");
  alert("Button was double-clicked!"); // Display an alert on double-click
}
let topButton = document.querySelector("#first-button");
topButton.addEventListener("dblclick", handleDoubleClick); // Add event listener for double-click

// Question two: Interactive elements
// This function changes the text of the heading when the button is clicked
function changeText() {
  let secondButton = document.querySelector("#second-button");
  let headingElement = document.querySelector("#food-heading");
  console.log(secondButton);

  headingElement.innerHTML =
    "There are 5 food groups as displayed in the slides below"; // Change the heading text
}

let secondButton = document.querySelector("#second-button");
secondButton.addEventListener("click", changeText);

changeText(); // Call the function to change text on load

// slideshow functionality
// This function creates a simple slideshow with next and previous buttons
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-play slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Show the first slide initially
showSlide(slideIndex);

// Tabs functionality
// This function creates a tabbed interface with different content sections
function openTab(tabId) {
  const contents = document.getElementsByClassName("tab-content");
  for (let content of contents) {
    content.style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

// Optionally show first tab on load
window.onload = () => openTab("tab1");

// Question three: Form handling

// Required fields validation
function validateFields() {
  const name = document.getElementById("name").value.trim();
  const babyName = document.getElementById("baby-name").value.trim();
  const babyAge = document.getElementById("baby-age").value.trim();
  const babyWeight = document.getElementById("baby-weight").value.trim();
  const babyHeight = document.getElementById("baby-height").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    babyName === "" ||
    babyAge === "" ||
    babyWeight === "" ||
    babyHeight === ""
  ) {
    error.textContent = "Please fill in all required fields.";
    return false; // prevent form submission
  }

  error.textContent = ""; // clear previous error
  return true; // allow submission
}

// This function validates the email input in the form
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");

  // Simple email regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return false; // prevent form submission
  }

  error.textContent = ""; // clear any previous error
  alert("Email is valid!");
  return true;
}

// This function validates the password input in the form
function validatePassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!minLength || !hasUpper || !hasLower || !hasNumber || !hasSpecial) {
    error.textContent =
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    return false;
  }

  error.textContent = "";
  alert("Password is valid!");
  return true;
}

// Real time feedback for password strength
function checkPassword() {
  const password = document.getElementById("password").value;

  // Feedback elements
  const length = document.getElementById("length");
  const upper = document.getElementById("upper");
  const lower = document.getElementById("lower");
  const number = document.getElementById("number");
  const special = document.getElementById("special");

  // Validation checks
  length.textContent =
    password.length >= 8
      ? "✅ At least 8 characters"
      : "❌ At least 8 characters";
  upper.textContent = /[A-Z]/.test(password)
    ? "✅ At least one uppercase letter"
    : "❌ At least one uppercase letter";
  lower.textContent = /[a-z]/.test(password)
    ? "✅ At least one lowercase letter"
    : "❌ At least one lowercase letter";
  number.textContent = /[0-9]/.test(password)
    ? "✅ At least one number"
    : "❌ At least one number";
  special.textContent = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ? "✅ At least one special character"
    : "❌ At least one special character";
}
