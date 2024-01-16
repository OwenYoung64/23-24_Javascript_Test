/* Put code for the task below */
/* constants */
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

/* event listener */
submit.addEventListener('click', formCheck);

/* function to check if the form is empty or filled when the submit button is pressed */
function formCheck() {
  if (name.value === '') {
    name.style.backgroundColor = "red";
  } else {
    name.style.backgroundColor = 'white';
  }

  if (address.value === '') {
    address.style.backgroundColor = "red";
  } else {
    address.style.backgroundColor = 'white';
  }

  if (phone.value === '') {
    phone.style.backgroundColor = "red";
  } else {
    phone.style.backgroundColor = 'white';
  }

  if (email.value === '') {
    email.style.backgroundColor = "red";
  } else {
    email.style.backgroundColor = 'white';
  }
}