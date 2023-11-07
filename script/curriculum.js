import { form } from '../data/form.js'

const button_index = document.querySelector('.js-form-button-continue-index');

button_index.addEventListener('click', () => {
    const name = document.querySelector('.js-form-input-name').value;
    form.push({
        name
    })
    console.log(form)
})