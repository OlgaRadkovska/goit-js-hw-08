import throttle from 'lodash.throttle';

const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(setRecords, 500));
 
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]')

function setRecords() {
    const record = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem(key, JSON.stringify(record))
}

function getRecords() {
    if (JSON.parse(localStorage.getItem(key) === null)) {
        return;
    } else {
        email.value = JSON.parse(localStorage.getItem(key)).email;
        message.value = JSON.parse(localStorage.getItem(key)).message;
    }
}
getRecords();
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
     const record = {
       email: email.value,
       message: message.value,
     };
    console.log(record);
    localStorage.removeItem(key);
    form.reset();
}