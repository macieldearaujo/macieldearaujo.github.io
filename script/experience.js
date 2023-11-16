import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js'
import { editForm } from '../data/editform.js'

console.log(form);

const params = new URLSearchParams(window.location.search);
const executeRevision = params.get('executeRevision');
const executeAdd = params.get('executeAdd')
const id = params.get('id');

if (executeRevision) {
    editForm(id, form.experiences, executeRevision);
}

const name = document.querySelector('.js-form-input-title');
const institution = document.querySelector('.js-form-input-institution');
const begin_month = document.querySelector('.js-form-input-begin-month');
const begin_year = document.querySelector('.js-form-input-begin-year');
const end_month = document.querySelector('.js-form-input-end-month');
const end_year = document.querySelector('.js-form-input-end-year');
const description = document.querySelector('.js-form-input-description');

document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
    if (!name.value || !institution.value || !begin_month.value || !begin_year.value || !end_month.value || !end_year.value) {
        displayAlert();
    } else if (begin_month.value === 'default' || begin_year.value === 'default' || end_month.value === 'default' || end_year.value === 'default') {
        displayAlert();
    } else if (begin_year.value > end_year.value || (begin_year.value === end_year.value && begin_month.value > end_month.value)) {
        displayAlert();
    } else if (executeAdd) {
        addToForm();
        saveToStorage();
        nextPage('revision.html');
    } else if (!executeRevision && !executeAdd) {
        addToForm();
        saveToStorage();
        nextPage('experience revision.html');
    }

    function addToForm() {
        const experience = {
            id: form.experiences.length,
            name: name.value,
            institution: institution.value,
            begin_month: begin_month.value,
            begin_year: begin_year.value,
            end_month: end_month.value,
            end_year: end_year.value,
            description: description.textContent
        };

        form.experiences.push(experience);
    }

    console.log(form);
})