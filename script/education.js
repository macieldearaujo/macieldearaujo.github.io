import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js'
import { editForm } from '../data/editform.js'

console.log(form)

const params = new URLSearchParams(window.location.search);
const executeRevision = params.get('executeRevision');
const executeAdd = params.get('executeAdd')
const id = params.get('id');

if (executeRevision) {
    editForm(id, form.courses, executeRevision);
}

const nameElement = document.querySelector('.js-form-input-title');
const institutionElement = document.querySelector('.js-form-input-institution');
const begin_monthElement = document.querySelector('.js-form-input-begin-month');
const begin_yearElement = document.querySelector('.js-form-input-begin-year');
const end_monthElement = document.querySelector('.js-form-input-end-month');
const end_yearElement = document.querySelector('.js-form-input-end-year');


document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
    if (!nameElement.value || !institutionElement.value || !begin_monthElement.value || !begin_yearElement.value || !end_monthElement.value || !end_yearElement.value) {
        displayAlert();
    } else if (begin_monthElement.value === 'default' || begin_yearElement.value === 'default' || end_monthElement.value === 'default' || end_yearElement.value === 'default') {
        displayAlert();
    } else if (begin_yearElement.value > end_yearElement.value || (begin_yearElement.value === end_yearElement.value && begin_monthElement.value > end_monthElement.value)) {
        displayAlert();
    } else if (executeAdd) {
        addToForm();
        saveToStorage();
        nextPage('revision.html');
    } else if (!executeRevision && !executeAdd) {
        addToForm();
        saveToStorage();
        nextPage('education revision.html');
    }

    function addToForm() {
        const courses = {
            id: form.courses.length,
            name: nameElement.value,
            institution: institutionElement.value,
            begin_month: begin_monthElement.value,
            begin_year: begin_yearElement.value,
            end_month: end_monthElement.value,
            end_year: end_yearElement.value
        };

        form.courses.push(courses);
    }

    console.log(form)
})