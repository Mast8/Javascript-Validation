const names = document.getElementById('names');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const email = document.getElementById('email');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElementpassword = document.getElementById('errorP');
const errorElementpassword1 = document.getElementById('errorP1');
const errorElementEmail= document.getElementById('errorEm');

form.addEventListener('submit', (e) => {

  //write the validation messages
  let messages = { };
  if (names.value === '' || names.value == null || names.value .trim() === "") {
    messages.name = 'Name is required';
  } else { 
      showSuccess(names );
      errorElement.innerText = "";
  }

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
      showSuccess(password );
    }
  }

  if( password1.value !== password.value || password1.value.trim() === "" ) {
    messages.password1 = 'Passwords are not equal';
  } else {
      errorElementpassword1.innerText = "";
      showSuccess(password1);
    }

  
  let re = /\S+@\S+\.\S+/;

  if( !re.test(email.value)  ){
    messages.email = 'Has to be a valid email';
  } else errorElementEmail.innerText = "";

  //if there are errors 
  if (Object.keys(messages).length > 0) { 
  
    console.log(messages);
    e.preventDefault();
    if(checkRequired([names, email, password, password1])){
      //get and show each error
      if( messages.name )
        errorElement.innerText = messages.name;
      if( messages.password )
        errorElementpassword.innerText = messages.password;
      if(messages.password1 )
        errorElementpassword1.innerText = messages.password1;
      if( messages.email)
        errorElementEmail.innerText = messages.email;
    }
  } 

})

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function showError(input, message) {
  console.log(message);
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  console.log(small);
  small.innerText = message;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}