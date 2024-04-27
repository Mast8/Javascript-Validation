const name = document.getElementById('names');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElementpassword = document.getElementById('errorP');

form.addEventListener('submit', (e) => {
  //let messages = {name: "", password: "" };
  let messages = { };
  if (names.value === '' || names.value == null || names.value .trim() === "") {
    messages.name = 'Name is required';
  } 

  if (password.value.length <= 6) 
    messages.password = 'Password must be longer than 6 characters';
  else {
    if (password.value.length >= 20) {
      messages.password = 'Password must be less than 20 characters';
    } else {
      if (password.value === 'password') 
        messages.password = 'Password cannot be password';
      //else messages.password = '';
    }
  }

  

  

  if (Object.keys(messages).length > 0) {
    console.log(messages.length);
    e.preventDefault();
    if( messages.name )
      errorElement.innerText = messages.name;
    //if( messages.password )
    errorElementpassword.innerText = messages.password;
  }

})