console.log(`6666`);
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput,500));
onPageLoad();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(`func onFormSubmit`);
  console.log(`E-mail: ${formData.email}, Message: ${formData.message}`);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPageLoad() {
  console.log(`Loading..`);
  const savedMess = localStorage.getItem(STORAGE_KEY);
  const formText=JSON.parse(savedMess);
  if (savedMess) {
    refs.email.value = formText.email;
    refs.textarea.value = formText.message;
  }
}
