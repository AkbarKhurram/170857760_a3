function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid Email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty Email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  var re = /^[a-z\d]{8,24}$/i;

  var test = re.test(String(username).toLowerCase());

  if (!test) {
    alert("Invalid Username.");

    return false;
  }

  return true;
}

function validateusernameNoRegex() {
  var username = document.getElementById("username").value;

  if (username == '') {
    alert("Empty Username.");
    document.getElementById("username").focus();

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  var re = /^[a-z\d]{8,24}$/i;

  var test = re.test(String(password).toLowerCase());

  if (!test) {
    alert("Invalid Password.");

    return false;
  }

  return true;
}

function validatePasswordNoRegex() {
  var password = document.getElementById("password").value;

  if (password == '') {
    alert("Empty Password.");
    document.getElementById("password").focus();

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
