import { form, displayAlert, saveToStorage } from '../data/form.js'

checkInput('education');

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
        const course_name = document.querySelector('.js-form-input-course').value;
        const course_institution = document.querySelector('.js-form-input-institution').value;
        const course_begin_month = document.querySelector('.js-form-input-begin-month').value;
        const course_begin_year = document.querySelector('.js-form-input-begin-year').value;
        const course_end_month = document.querySelector('.js-form-input-end-month').value;
        const course_end_year = document.querySelector('.js-form-input-end-year').value;

        if (!course_name || !course_institution || !course_begin_month || !course_begin_year || !course_end_month || !course_end_year) {
            displayAlert();
        } else {
            window.location.href = 'education revision.html';
        }

        form.courses = {};
        form.courses.course_name = course_name;
        form.courses.course_institution = course_institution;
        form.courses.course_begin_month = course_begin_month;
        form.courses.course_begin_year = course_begin_year;
        form.courses.course_end_month = course_end_month;
        form.courses.course_end_year = course_end_year;

        console.log(form)
        saveToStorage();
    })
}
