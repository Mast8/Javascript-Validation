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
  




  
  
    
    e.preventDefault();
    if(checkRequired([names, email, password, password1])){
     
      //get and show each error
      
     
      checkEmail(email) ;
      checkLength(password, 6, 20);
      checkPasswordsMatch(password, password1);
     /*  if(checkEmail(email)  && checkLength(password, 6, 20) &&  checkPasswordsMatch(password, password1)) {
        console.log("Success");
      }  */
    }
  

})

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //let passed = false;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    //passed = true;
  } else {
    showError(input, 'Email is not valid');
  }
  //return passed;
}


function checkLength(input, min, max) {
  //let passed = false;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
    //passed = true;
  }
  //return passed;
}

function checkPasswordsMatch(input1, input2) {
  //let passed = false;
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
    }//else passed = true;
    //return passed;
}


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
  //console.log(small);
  small.innerText = message;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}