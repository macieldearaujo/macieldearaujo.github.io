export let form = JSON.parse(localStorage.getItem('form'));

if(!form) {
    form = {};
}

function saveToStorage() {
    localStorage.setItem('form', JSON.stringify(form));
} 

export function consoleForm() {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('.form-input[name="phone"]').value;
        const marital_status = document.querySelector('.js-form-input-maritial-status').value;
        const country = document.querySelector('.js-form-input-country').value;
        const city =  document.querySelector('.form-input[name="city"]').value;
        const neighborhood = document.querySelector('.js-form-input-neighborhood').value;
        
        form.personalInformations = {};
        form.personalInformations.name = name;
        form.personalInformations.email = email;
        form.personalInformations.phone = phone;
        form.personalInformations.marital_status = marital_status;
        form.adress = {};
        form.adress.country = country;
        form.adress.city = city;
        form.adress.neighborhood = neighborhood;

        saveToStorage();
        console.log(form)
}

export function checkInputs(page) {
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`)

    continueButton.addEventListener('click', () => {
        console.log(form.length, form)
            consoleForm()
    })
}