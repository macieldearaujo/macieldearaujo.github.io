import { form, displayOnScreen, removeFromForm, nextPage } from '../data/form.js'

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
displayOnScreen('ability', form.abilities);
displayOnScreen('idiom', form.idioms);

removeFromForm('education', form.courses);
removeFromForm('experience', form.experiences);
removeFromForm('abilities', form.abilities);
removeFromForm('idioms', form.idioms);


const adressElement = document.querySelector('.js-adress');

