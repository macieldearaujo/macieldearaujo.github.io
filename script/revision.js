import { form, displayOnScreen, displayOnScreenAbility, removeFromForm, nextPage } from '../data/form.js'

console.log(form)
personAndAddress()

function personAndAddress() {
    const name = form.personalInformations.name;
    const email = form.personalInformations.email;
    const phone = form.personalInformations.phone;
    const marital_status = form.personalInformations.marital_status;
    const neighborhood = form.adress.neighborhood;
    const city = form.adress.city;
    const country = form.adress.country;

    const nameElement = document.querySelector('.js-name'); 
    const emailPhoneElement = document.querySelector('.js-email-phone');
    const marital_statusElement = document.querySelector('.js-marital_status');
    const adressElement = document.querySelector('.js-adress');

    nameElement.innerHTML = name;
    marital_statusElement.innerHTML = marital_status;
    emailPhoneElement.innerHTML = `${email} | ${phone}`;
    adressElement.innerHTML = `${neighborhood}, ${city}, ${country}`
}

displayOnScreen('education', form.courses);
displayOnScreen('experience', form.experiences);

removeFromForm('education', form.courses);
removeFromForm('experience', form.experiences);

displayOnScreenAbility()

const adressElement = document.querySelector('.js-adress');

