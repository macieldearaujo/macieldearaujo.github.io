import { form, removeFromForm, displayOnScreen, nextPage, ifEmpty } from '../data/form.js'
import { editEducation } from '../data/editform.js'

displayOnScreen('experience', form.experiences);

editEducation('experience', 'experience revision');

const addButton = document.querySelector(`.js-form-button-add-${'experience'}`);

addButton.addEventListener('click', () => {
    window.location.href = 'experience.html'
})

console.log(form)
const continueButton = document.querySelector(`.js-form-button-continue-${'experience'}`);

continueButton.addEventListener('click', () => {
    nextPage('skills.html');
})

removeFromForm('experience', form.experiences);