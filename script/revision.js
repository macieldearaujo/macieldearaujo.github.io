import { form, displayOnScreen, removeFromForm, ifEmpty } from '../data/form.js'
import { editEducation } from '../data/editform.js'

console.log(form)
personAndAddress()

function personAndAddress() {
    // get the properties from form
    const name = form.personalInformations.name;
    const email = form.personalInformations.email;
    const phone = form.personalInformations.phone;
    const marital_statusText = form.personalInformations.marital_status_text;
    const neighborhood = form.adress.neighborhood;
    const city = form.adress.city;
    const countryText = form.adress.country_text;

    // get the paragraphs or titles
    const nameElement = document.querySelector('.js-name');
    const emailPhoneElement = document.querySelector('.js-email-phone');
    const marital_statusElement = document.querySelector('.js-marital_status');
    const adressElement = document.querySelector('.js-adress');

    // display on screen
    if (name || email || phone || marital_statusText || neighborhood || city || countryText) {
        nameElement.innerHTML = name;
        marital_statusElement.innerHTML = marital_statusText;
        emailPhoneElement.innerHTML = `${email} | ${phone}`;
        adressElement.innerHTML = `${neighborhood}, ${city}, ${countryText}`
    }
}

displayOnScreen('education', form.courses);
displayOnScreen('experience', form.experiences);
displayOnScreen('ability', form.abilities);
displayOnScreen('idiom', form.idioms);

addToForm('personal-information', 'index');
addToForm('education', 'education');
addToForm('experience', 'experience');
addToForm('idiom' ,'skills');
addToForm('ability' ,'skills');

removeFromForm('education', form.courses);
removeFromForm('experience', form.experiences);
removeFromForm('abilities', form.abilities);
removeFromForm('idioms', form.idioms);

ifEmpty('personal-informations')
ifEmpty('experience', form.experiences);
ifEmpty('education', form.courses);
ifEmpty('ability', form.abilities);
ifEmpty('idiom', form.idioms);

editEducation('education', 'education', 'revision');
editEducation('experience', 'experience', 'revision');
editEducation('idiom', 'skills', 'skills');

function addToForm(page, link) {
    const addButton = document.querySelector(`.js-add-${page}`);

    addButton.addEventListener('click', () => {
        window.location.href = `${link}.html?executeAdd=true`
    })
}