import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js';

console.log(form);

formatPhone();

function formatPhone() {
    const phoneElement = document.querySelector('.js-form-input-phone');

    phoneElement.addEventListener('input', (event) => {
        let value = event.target.value;

        value = value.replace(/\D/g, '');

        if (value.length < 2) {
            value = `(${value}`;
        } else if (value.length === 2) {
            value = `(${value}) `;
        } else if (value.length >= 3 && value.length <= 9) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length >= 10) {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        }
        event.target.value = value;
        if (value.length === 0 || value === '(') {
            event.target.value = '';
        }
    });
}

// parameters that come from the revision
const params = new URLSearchParams(window.location.search);
const executeRevision = params.get('executeRevision');

// get the value of inputs
const nameElement = document.querySelector('.js-form-input-name');
const emailElement = document.querySelector('.js-form-input-email');
const phoneElement = document.querySelector('.js-form-input-phone');
const marital_statusElement = document.querySelector('.js-form-input-maritial-status');
const neighborhoodElement = document.querySelector('.js-form-input-neighborhood');
const cityElement = document.querySelector('.js-form-input-city');
const countryElement = document.querySelector('.js-form-input-country');

// get the objects
const name = form.personalInformations.name;
const email = form.personalInformations.email;
const phone = form.personalInformations.phone;
const marital_status = form.personalInformations.marital_status;
const country = form.adress.country;
const city = form.adress.city;
const neighborhood = form.adress.neighborhood;

if ((executeRevision) && (name && email && phone && marital_status && country && city && neighborhood)) {
    nameElement.value = name;
    emailElement.value = email;
    phoneElement.value = phone;
    marital_statusElement.value = marital_status;
    neighborhoodElement.value = neighborhood;
    cityElement.value = city;
    countryElement.value = country;
}

document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
    //check if the inputs are valid
    if (!nameElement || !emailElement || !phoneElement || !marital_statusElement || !countryElement || !cityElement) {
        displayAlert();
    } else if (executeRevision) {
        readInput()
        saveAndUpdate('revision.html')
    } else {
        readInput()
        saveAndUpdate('education.html')
    }
});

function readInput() {    
    const marital_statusElementText = marital_statusElement.options[marital_statusElement.selectedIndex].text;
    const countryElementText = countryElement.options[countryElement.selectedIndex].text;
    
    form.personalInformations.name = nameElement.value;
    form.personalInformations.email = emailElement.value;
    form.personalInformations.phone = phoneElement.value;
    form.personalInformations.marital_status = marital_statusElement.value;
    form.personalInformations.marital_status_text = marital_statusElementText;
    form.adress.neighborhood = neighborhoodElement.value;
    form.adress.city = cityElement.value;
    form.adress.country = countryElement.value;
    form.adress.country_text = countryElementText;
}

function saveAndUpdate(link) {
    console.log(form);
    saveToStorage();
    nextPage(link);
}