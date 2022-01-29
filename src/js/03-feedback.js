console.log(`6666`);
import _ from 'lodash';

const formInput = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textInput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY='feedback-form-state';

let formState = {
    email: emailInput.value,
    text: textInput.value,
  };

let formJSON = JSON.stringify(formState);

function saveFormToLocal() {
    // console.log(`emailInput.value ${emailInput.value}`); 
    // console.log(`textInput.value ${textInput.value}`); 
    
  formState.email = emailInput.value;
  formState.text = textInput.value;
  formJSON = JSON.stringify(formState);
  console.log('input every 500ms');
  localStorage.setItem(STORAGE_KEY, formJSON);
  console.log(`formJSON ${formJSON}`);
}

function loadFormFromLocal() {
  console.log(`Loading`);
//   try {
    formState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formState);
    emailInput.value = formState.email;
    textInput.value = formState.text;
    // Code that may throw a runtime error
//   } catch (error) {
    // console.log(`Load error, ${error}`);
//   }
}

loadFormFromLocal();

formInput.addEventListener(
  'input',
  _.debounce(() => {
    saveFormToLocal();
  }, 500),
);

// formInput.addEventListener('submit', onFormSubmit());

// function onFormSubmit(event) {
// //   //     event.preventDefault();
//    console.log(`Current form value: Email:'${formState.email}' Message:'${formState.text}'`);
// //   localStorage.removeItem('feedback-form-state');
// }
