import { form, removeFromForm, displayOnScreen } from '../data/form.js'

const page = 'experience'

checkInput(page);

displayOnScreen(page, form.experiences);

const addButton = document.querySelector(`.js-form-button-add-${page}`);

    addButton.addEventListener('click', () => {
        window.location.href = 'experience.html'
    })

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);
    
    continueButton.addEventListener('click', () => {
        window.location.href = 'skills.html'
    })
}

removeFromForm(page, form.experiences);