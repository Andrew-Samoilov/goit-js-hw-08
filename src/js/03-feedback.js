console.log(`6666`);
import throttle from 'lodash.throttle';

const refs={
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
}
const STORAGE_KEY='feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle( onTextareaInput),500); 
onLoadFormFromLocal();

function onFormSubmit(evt){
  evt.preventDefault();
  console.log(`func onFormSubmit`);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  
}

function onTextareaInput(evt) {
  // console.log(`func onTextareaInput`);
  const message = evt.target.value;
  // console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
}

function onLoadFormFromLocal() {
    console.log(`Loading..`);
    const savedMess=localStorage.getItem(STORAGE_KEY);
  if (savedMess){
    // console.log(`savedMess ${savedMess}`);
    refs.textarea.value=savedMess;
  };
};


// formInput = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('.feedback-form input');
// const textInput = document.querySelector('.feedback-form textarea');


// let formState = {email: emailInput.value, text: textInput.value};
// let formJSON = JSON.stringify(formState);

// function saveFormToLocal() {
//   formState.email = emailInput.value;
//   formState.text = textInput.value;
//   formJSON = JSON.stringify(formState);
//   localStorage.setItem(STORAGE_KEY, formJSON);
//   console.log(`form JSON ${formJSON}`);
// }

// function loadFormFromLocal() {
//   console.log(`Loading`);
// //   try {
//     formState = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     console.log(formState);
//     emailInput.value = formState.email;
//     textInput.value = formState.text;
//     // Code that may throw a runtime error
// //   } catch (error) {
//     // console.log(`Load error, ${error}`);
// //   }
// }

// loadFormFromLocal();

// formInput.addEventListener('input',_.debounce(() => {
//     console.log('input every 500ms');
//     saveFormToLocal();
//   }, 500),
// );

// formInput.addEventListener('submit', onFormSubmit());

// function onFormSubmit(event) {
// //   //     event.preventDefault();
//    console.log(`Current form value: Email:'${formState.email}' Message:'${formState.text}'`);
// //   localStorage.removeItem('feedback-form-state');
// }
