import { form, saveToStorage, removeFromForm, displayOnScreen } from '../data/form.js'

const page = 'education'

checkInput(page);

displayOnScreen(page);

const continueButton = document.querySelector('.js-form-button-add-education');

continueButton.addEventListener('click', () => {
    window.location.href = 'education.html';
})

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
        window.location.href = 'experience.html'
    })
}

removeFromForm(page);