function signup() {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (
    fullname === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all fields");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    alert("Account created successfully (demo)");
    window.location.href = "login.html";
  }
}
