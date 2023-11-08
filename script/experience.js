import { form, displayAlert, saveToStorage } from '../data/form.js'

checkInput('experience');

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
        const name = document.querySelector('.js-form-input-position').value;
        const institution = document.querySelector('.js-form-input-company').value;
        const begin_month = document.querySelector('.js-form-input-begin-month').value;
        const begin_year = document.querySelector('.js-form-input-begin-year').value;
        const end_month = document.querySelector('.js-form-input-end-month').value;
        const end_year = document.querySelector('.js-form-input-end-year').value;
        const description = document.querySelector('.js-form-input-description')

        if (!name || !institution || !begin_month || !begin_year || !end_month || !end_year || !description) {
            displayAlert();
        } else if (begin_month === 'default' || begin_year === 'default' || end_month === 'default' || end_year === 'default') {
            displayAlert();
        } else if (begin_year > end_year || (begin_year === end_year && begin_month > end_month)) {
            displayAlert();
        } else {
            addToForm();
            window.location.href = 'experience revision.html';
        }

        function addToForm() {
            const experience = {
                id: form.experiences.length,
                name,
                institution,
                begin_month,
                begin_year,
                end_month,
                end_year,
            };
            
            form.experiences.push(experience);
        }

        console.log(form)
        saveToStorage();
    })
}
