// used code inspiration from the test review - credit to Mr. Kiedes
// Gain access to the HTML elements
const name = document.getElementById("name");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

// add a function to check the form
function formCheck() {
  // Check name field
  if (name.value === '') {
    name.style.backgroundColor = "red";
    // if the name field is empty, make it red
  } else {
    // if the name field is filled, make it white
    name.style.backgroundColor = 'white';
  }

  // Check address field
  if (address.value === '') {
    address.style.backgroundColor = "red";
  } else {
    address.style.backgroundColor = 'white';
  }

  // Check phone field
  if (phone.value === '') {
    phone.style.backgroundColor = "red";
  } else {
    phone.style.backgroundColor = 'white';
  }

  // Check email field
  if (email.value === '') {
    email.style.backgroundColor = "red";
  } else {
    email.style.backgroundColor = 'white';
  }
}