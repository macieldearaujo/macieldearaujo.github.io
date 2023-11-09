import { form, displayAlert, saveToStorage } from '../data/form.js'

const page = 'skills'

const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', () => {
    console.log(form)
})

addButton_ability.addEventListener('click', () => {

})

continueButton.addEventListener('click', addToForm)

function addToForm() {
    const language = document.querySelector('.js-form-input-language').value;
    const level = document.querySelector('.js-form-input-proficiency').value;
    const ability = document.querySelector('.js-form-input-ability').value;


    const courses = {
        id: form.courses.length,
        language,
        level,
        ability
    }

    form.skills.push(courses)

    saveToStorage();

    console.log(form);
}