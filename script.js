// Password gate
const passwordScreen = document.getElementById("password-screen");
const mainContent = document.getElementById("main-content");
const enterBtn = document.getElementById("enter-btn");
const passwordInput = document.getElementById("password-input");

// set your password here
const secretPassword = "fbc623";

enterBtn.addEventListener("click", () => {
  if (passwordInput.value.toLowerCase() === secretPassword) {
    passwordScreen.classList.add("hidden");
    mainContent.style.display = "block";
  } else {
    alert("Wrong password, try again.");
  }
});

// Hide content initially until password entered
mainContent.style.display = "none";
passwordScreen.classList.remove("hidden");
