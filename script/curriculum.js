import { form, displayAlert, saveToStorage, nextPage, editForm } from '../data/form.js'

editForm(form.personalInformations);
editForm(form.adress);


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


console.log(form)
const continueButton = document.querySelector(`.js-form-button-continue`);

continueButton.addEventListener('click', () => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('.js-form-input-phone').value;

    const marital_status = document.querySelector('.js-form-input-maritial-status').value;

    const country = document.querySelector('.js-form-input-country').value;

    const city = document.querySelector('.form-input[name="city"]').value;
    const neighborhood = document.querySelector('.js-form-input-neighborhood').value;

    if (!name || !email || !phone || !marital_status || !country || !city) {
        displayAlert();
    } else {
        form.personalInformations = {};
        form.personalInformations.name = name;
        form.personalInformations.email = email;
        form.personalInformations.phone = phone;
        form.personalInformations.marital_status = marital_status;
        form.adress = {};
        form.adress.country = country;
        form.adress.city = city;
        form.adress.neighborhood = neighborhood;

        console.log(form)
        saveToStorage();

        nextPage('education.html');
    }
})
