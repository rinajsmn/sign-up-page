const indicator = document.querySelectorAll('.indicator');
const input = document.querySelector('#password');

const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');

const text = document.getElementById('text');

const items = document.querySelectorAll('.showBtn');

/* password icon visibility */
function visibilityIcon(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', visibilityIcon));


function passShow(){
  /* password visibility */
  items.forEach(item => item.onclick = function(){
    if(input.type == "password"){
      input.type = "text";
      item.classList.add = "active";

    }else{
      input.type = "password";
      item.classList.remove = "active";
    }
  })

  /* password strength checker */
  if(input.value !== '' && indicator){
      for (let x = 0; x < indicator.length; x++) {
        indicator[x].style.visibility = "visible";
      }
      text.style.visibility = "visible";
    }

    
      let regExpMedium = /\d+/;
      let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
      let inputValue = input.value;

      if(inputValue.length <= 3){
        weak.classList.add('active');
      } 
      
      if(inputValue.length >=6  && inputValue.match(regExpMedium) ){
        weak.classList.add('active');
        medium.classList.add('active');
      } else if(inputValue === ''){
        weak.classList.remove('active');
        medium.classList.remove('active');
      }
      
      if(inputValue.length > 9 && inputValue.match(regExpMedium) && inputValue.match(regExpStrong)){
        weak.classList.add('active');
        medium.classList.add('active');
        strong.classList.add('active');
      } else if(inputValue === ''){
        weak.classList.remove('active');
        medium.classList.remove('active');
        strong.classList.remove('active');
      }

}
console.log(passShow());

/*form validation*/
const form = document.querySelector('form');

const email = document.getElementById('email');
const fullName = document.getElementById('name');
const checkbox = document.getElementById('checkbox')

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInput();
});


const showError = (element, text) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector('.error');

  displayError.innerText = text;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const success = element => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector('.error');

  displayError.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInput = () => {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const inputValue = input.value.trim();

    if(fullNameValue === ''){
      showError(fullName, 'This field is required');
    } else {
      success(fullName);
    }
    if(emailValue === ''){
      showError(email, 'This field is required');
    } else {
      success(email);
    }

    if(inputValue === ''){
      showError(input, 'Please enter a password');
    } else {
      success(input);
    }

    let checked = false;
    if(checkbox.checked) {
      checked = true;
    }
    if(!checked){
      showError(checkbox, 'To register, please agree to our Term and Conditions');
    } else {
      success(checkbox);
    }
    
};