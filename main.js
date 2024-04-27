const name = document.getElementById('names');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElementpassword = document.getElementById('errorP');

form.addEventListener('submit', (e) => {
  let messages = {};
  if (names.value === '' || names.value == null || names.value .trim() === "") {
    messages.name = 'Name is required';
  } 

  if (password.value.length <= 6) {
    messages.password = 'Password must be longer than 6 characters';
  }

  if (password.value.length >= 20) {
    messages.password = 'Password must be less than 20 characters';
  }

  if (password.value === 'password') {
    messages.password = 'Password cannot be password';
  }

  if (Object.keys(messages).length > 0) {
    console.log(messages);
    e.preventDefault();
    //errorElement.innerText = messages.join(', ');
    if(messages.name )
    errorElement.innerText = messages.name;
    errorElementpassword.innerText = messages.password;
  }else {
    messages.name = "";
    //messages.name = ' ';
  }

})