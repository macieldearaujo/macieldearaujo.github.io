import { form, removeFromForm, displayOnScreen, nextPage } from '../data/form.js'
import { editEducation } from '../data/editform.js'

displayOnScreen('education', form.courses);

editEducation('education', 'education revision');

const addButton = document.querySelector(`.js-form-button-add-education`);

addButton.addEventListener('click', () => {
    window.location.href = 'education.html'
})

console.log(form)
const continueButton = document.querySelector(`.js-form-button-continue-education`);

continueButton.addEventListener('click', () => {
    nextPage('experience.html');
})

removeFromForm('education', form.courses);