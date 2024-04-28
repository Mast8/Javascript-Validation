const name = document.getElementById('names');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElementpassword = document.getElementById('errorP');
const errorElementpassword1 = document.getElementById('errorP1');

form.addEventListener('submit', (e) => {

  //write the validation messages
  let messages = { };
  if (names.value === '' || names.value == null || names.value .trim() === "") {
    messages.name = 'Name is required';
  }  else errorElement.innerText = "";

  if (password.value.length <= 6) 
    messages.password = 'Password must be longer than 6 characters';
  else {
    if (password.value.length >= 20) {
      messages.password = 'Password must be less than 20 characters';
    } else {
      if (password.value === 'password') {
        messages.password = 'Password cannot be password';
      }
      else errorElementpassword.innerText = "";
    }
  }

  if( password1.value !== password.value ) {
    messages.password1 = 'Passwords are not equal';
  }else errorElementpassword1.innerText = "";

  //if there are errors 
  if (Object.keys(messages).length > 0) {
    console.log(messages);
    e.preventDefault();
    //get and show each error
    if( messages.name )
      errorElement.innerText = messages.name;
    if( messages.password )
      errorElementpassword.innerText = messages.password;
    if(messages.password1 )
      errorElementpassword1.innerText = messages.password1;
  } 

})