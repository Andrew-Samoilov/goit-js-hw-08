console.log(`6 6 6 6 `);
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
onPageLoad();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(`E-mail: ${formData.email}, Message: ${formData.message}`);
  formData.email = '';
  formData.message = '';
}

function onFormInput(evt) {
  // formData[evt.target.name] = evt.target.value;
  // забавно шо з відоса Репети не працює )))
  formData.email = refs.email.value;
  formData.message = refs.message.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPageLoad() {
  console.log(`Loading..`);
  // const loadMess=
  const formText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(`localStorage.getItem(STORAGE_KEY) ${localStorage.getItem(STORAGE_KEY)}`);
  // console.log(`.email ${formText.email} .message ${formText.message}`);
  if (formText) {
   refs.email.value = formText.email;
   refs.message.value = formText.message;
  }
}
