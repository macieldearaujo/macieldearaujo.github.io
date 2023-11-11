import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js'

console.log(form)
personalInformations()

function personalInformations() {
    const name = form.personalInformations.name;
    const email = form.personalInformations.email;
    const phone = form.personalInformations.phone;
    const marital_status = form.personalInformations.marital_status;

    const nameElement = document.querySelector('.js-name'); 
    const emailElement = document.querySelector('.js-email');
    const phoneElement = document.querySelector('.js-phone');
    const marital_statusElement = document.querySelector('.js-marital_status');

    nameElement.innerHTML = name;
    emailElement.innerHTML = email;
    phoneElement.innerHTML = phone;
    marital_statusElement.innerHTML = marital_status;
}

const adressElement = document.querySelector('.js-adress');

