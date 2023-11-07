import { form } from '../data/form.js'

const button_index = document.querySelector('.js-form-button-continue-index');

button_index.addEventListener('click', () => {
    const name = document.querySelector('.js-form-input-name').value;
    const email = document.querySelector('.js-form-input-email').value;
    const phone = document.querySelector('.js-form-input-phone').value;
    const marital_status = document.querySelector('.js-form-input-maritial-status').value;
    const country = document.querySelector('.js-form-input-country').value;
    const city =  document.querySelector('.js-form-input-city').value;
    const neighborhood = document.querySelector('.js-form-input-neighborhood').value;
    
    form.push({
        personalInformation: {
            name,
            email,
            phone,
            marital_status,
        },
        adress: {
            country,
            city,
            neighborhood
        }
    })
    console.log(form)
})