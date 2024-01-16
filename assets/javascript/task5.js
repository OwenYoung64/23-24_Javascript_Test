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
    // if the field is empty, make it red
  } else {
    // if the field is filled, make it white
    name.style.backgroundColor = 'white';
  }

  // Check address field
  if (address.value === '') {
    address.style.backgroundColor = "red";
    // if the field is empty, make it red
  } else {
    // if the field is filled, make it white
    address.style.backgroundColor = 'white';
  }

  // Check phone field
  if (phone.value === '') {
    phone.style.backgroundColor = "red";
    // if the field is empty, make it red
  } else {
    // if the field is filled, make it white
    phone.style.backgroundColor = 'white';
  }

  // Check email field
  if (email.value === '') {
    email.style.backgroundColor = "red";
    // if the field is empty, make it red
  } else {
    // if the field is filled, make it white
    email.style.backgroundColor = 'white';
  }
}