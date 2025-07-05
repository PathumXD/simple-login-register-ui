  // Project: simple-login-register-ui
  // Author: PathumXD
  // GitHub: https://github.com/PathumXD/simple-login-register-ui


function toggleForms() {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  login.style.display = login.style.display === "none" ? "block" : "none";
  register.style.display = register.style.display === "none" ? "block" : "none";
  document.getElementById('forgotForm').style.display = "none";
}

function showForgot() {
  document.getElementById('loginForm').style.display = "none";
  document.getElementById('registerForm').style.display = "none";
  document.getElementById('forgotForm').style.display = "block";
}

function showLogin() {
  document.getElementById('loginForm').style.display = "block";
  document.getElementById('registerForm').style.display = "none";
  document.getElementById('forgotForm').style.display = "none";
}