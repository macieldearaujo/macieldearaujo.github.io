import { form } from '../data/form.js'

const button_index = document.querySelector('.js-form-button-continue-index');

button_index.addEventListener('click', () => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('.input[name="phone"]').value;
    const marital_status = document.querySelector('.select[name="maritalStatus"]').value;
    const country = document.querySelector('.select[name="country"]').value;
    const city =  document.querySelector('.input[name="city"]').value;
    const neighborhood = document.querySelector('.input[name="neighborhood"]').value;
    
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