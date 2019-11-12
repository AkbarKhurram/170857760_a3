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

function validateCountryNoRegex() {
  var country = document.getElementById("country").value;

  if (country == '') {
    alert("Empty Country.");
    document.getElementById("country").focus();

    return false;
  }

  return true;
}

function validateFileNoRegex() {
  var file = document.getElementById("avatarImage").value;

  if (file == '') {
    alert("Empty File.");
    document.getElementById("avatarImage").focus();

    return false;
  }

  return true;
}

function validateDescriptionNoRegex() {
  var description = document.getElementById("description").value;

  if (description == '') {
    alert("Empty Description.");
    document.getElementById("description").focus();

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateCountry()) {
    return false;
  }

  if (!validateFile()) {
      return false;
  }

  if (!validateDescription()) {
    return false;
  }

  return true;
}
