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
    if (name || email || phone || marital_status || neighborhood || city || countryText) {
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

addToForm('education');
addToForm('experience');

removeFromForm('education', form.courses);
removeFromForm('experience', form.experiences);
removeFromForm('abilities', form.abilities);
removeFromForm('idioms', form.idioms);

ifEmpty('personal-informations')
ifEmpty('experience', form.experiences);
ifEmpty('education', form.courses);
ifEmpty('ability', form.abilities);
ifEmpty('idiom', form.idioms);

editIndex();
editEducation('education');
editEducation('experience');


function editIndex() {
    const nameEditButton = document.querySelector('.form-edit-name');

    nameEditButton.addEventListener('click', () => {
        window.location.href = 'index.html?executeRevision=true';
    });
}

function addToForm(page) {
    const addButton = document.querySelector(`.js-add-${page}`);

    addButton.addEventListener('click', () => {
        window.location.href = `${page}.html?executeAdd=true`
    })
}