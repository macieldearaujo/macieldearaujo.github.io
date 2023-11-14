import { form, displayOnScreen, removeFromForm, ifEmpty } from '../data/form.js'

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

addEducation('education');

removeFromForm('education', form.courses);
removeFromForm('experience', form.experiences);
removeFromForm('abilities', form.abilities);
removeFromForm('idioms', form.idioms);

ifEmpty('experience', form.experiences);
ifEmpty('education', form.courses);
ifEmpty('ability', form.abilities);
ifEmpty('idiom', form.idioms);

editIndex();
editEducation();

function editIndex() {
    const nameEditButton = document.querySelector('.form-edit-name');

    nameEditButton.addEventListener('click', () => {
        window.location.href = 'index.html?executeRevision=true';
    });
}

export function editEducation() {
    const button = document.querySelectorAll('.js-edit-education');

    button.forEach((buttonSelected, index) => {
        buttonSelected.addEventListener('click', () => {
            window.location.href = `education.html?executeRevision=true&id=${index}`;
        })
    })
}



const adressElement = document.querySelector('.js-adress');

function addEducation(page) {
    const addButton = document.querySelector(`.js-add-${page}`);

    addButton.addEventListener('click', () => {
        window.location.href = `education.html?executeAdd=true`
    })
}