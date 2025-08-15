function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill in all fields");
  } else {
    alert("Login successful (demo)");
    // Here you can redirect or validate login with backend
  }
}
