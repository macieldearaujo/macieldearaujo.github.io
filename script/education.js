import { form, displayAlert, saveToStorage, nextPage, editForm } from '../data/form.js'


editForm('education');
console.log(form)
main()


function main() {
    const continueButton = document.querySelector(`.js-form-button-continue`);

continueButton.addEventListener('click', () => {
    const name = document.querySelector('.js-form-input-course').value;
    const institution = document.querySelector('.js-form-input-institution').value;
    const begin_month = document.querySelector('.js-form-input-begin-month').value;
    const begin_year = document.querySelector('.js-form-input-begin-year').value;
    const end_month = document.querySelector('.js-form-input-end-month').value;
    const end_year = document.querySelector('.js-form-input-end-year').value;

    const params = new URLSearchParams(window.location.search);
    const executeRevision = params.get('executeRevision');

    
    if (!name || !institution || !begin_month || !begin_year || !end_month || !end_year) {
        displayAlert();
    } else if (begin_month === 'default' || begin_year === 'default' || end_month === 'default' || end_year === 'default') {
        displayAlert();
    } else if (begin_year > end_year || (begin_year === end_year && begin_month > end_month)) {
        displayAlert();
    } else if (!executeRevision) {
        addToForm();
        nextPage('education revision.html');
    }

    function addToForm() {
        const courses = {
            id: form.courses.length,
            name: name,
            institution: institution,
            begin_month: begin_month,
            begin_year: begin_year,
            end_month: end_month,
            end_year: end_year,
        };

        form.courses.push(courses);
    }

    console.log(form)
    saveToStorage();
})
}