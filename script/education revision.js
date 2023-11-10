import { form, removeFromForm, displayOnScreen } from '../data/form.js'

const page = 'education'

checkInput(page);

displayOnScreen(page, form.courses);

const addButton = document.querySelector(`.js-form-button-add-${page}`);

    addButton.addEventListener('click', () => {
        window.location.href = 'education.html'
    })

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
        window.location.href = 'experience.html'
    })
}

removeFromForm(page, form.courses);