var username, email, password, gender, country;

function submit() {
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("pass").value;
  gender = document.getElementById("gender").value;
  country = document.getElementById("country").value;
  var result = document.getElementById("result");
  if (username === "") {
    alert("Username empty!");
  } else if (username.length < 5) {
    alert("Username must be more than 5 characters!");
  } else if (email === "") {
    alert("Email empty!");
  } else if (!email.includes("@")) {
    alert("That's not an email, please try again");
  } else if (password === "") {
    alert("Password empty!");
  } else if (gender === "Empty") {
    alert("Choose Gender");
  } else if (country === "Empty") {
    alert("Choose Country!");
  } else {
    alert("Register succesful, we'll redirect you to homepage");
    window.setTimeout((window.location.href = "index.html"), 500);
  }
}
