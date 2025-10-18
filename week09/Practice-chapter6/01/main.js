const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.querySelector("p");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  message.textContent = "";
  message.className = "";
 
  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    message.textContent = "missing some values, please try again!";
    message.style.color = "red";
    message.classList.add("error");
    return;
  }
 
  if (password.value !== confirmPassword.value) {
    message.style.color = "red";
    message.textContent = "password and confirm do not match, check again";
    message.classList.add("error");
    return;
  }
 
  message.textContent = "your data completed";
  message.style.color = "green";
  message.classList.add("success");
});


