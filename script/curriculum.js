import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js'

checkInput('index');

window.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const executeRevision = params.get('executeRevision');

    if (executeRevision === 'true') {
        revisionInput();
    }
});

formatPhone();

function formatPhone() {
    const phoneElement = document.querySelector('.js-form-input-phone');

    phoneElement.addEventListener('input', (event) => {
        let value = event.target.value;

        // Remove caracteres não numéricos
        value = value.replace(/\D/g, '');

        // Adiciona parênteses, espaço e traço conforme necessário
        if (value.length < 2) {
            // Ainda não digitou o DDD
            value = `(${value}`;
        } else if (value.length === 2) {
            // Digitou o DDD, adiciona o espaço
            value = `(${value}) `;
        } else if (value.length >= 3 && value.length <= 9) {
            // Completou o DDD, mas ainda não digitou os próximos números
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length >= 10) {
            // Digitou o número completo
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        }

        // Atualiza o valor no input
        event.target.value = value;

        // Remove formato extra se o usuário apagar todo o conteúdo
        if (value.length === 0 || value === '(') {
            event.target.value = '';
        }
    });
}




function revisionInput() {
    Object.entries(form.personalInformations).forEach(([key, value]) => {
        const element = document.querySelector(`.js-form-input-${key}`);
        if (element) {
            element.value = value;
        }
    });

    // Assuming form.adress is an object
    Object.entries(form.adress).forEach(([key, value]) => {
        const element = document.querySelector(`.js-form-input-${key}`);
        if (element) {
            element.value = value;
        }
    });

    document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
        nextPage('revision.html');
    })
}


function checkInput(page) {
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
            nextPage('education.html');
        }

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
    })
}