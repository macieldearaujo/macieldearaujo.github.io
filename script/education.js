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
        } else if (course_begin_month === 'default' || course_begin_year === 'default' || course_end_month === 'default' || course_end_year === 'default') {
            displayAlert();
        } else if (course_begin_year > course_end_year || (course_begin_year === course_end_year && course_begin_month > course_end_month)) {
            displayAlert();
        } else {
            addToForm();
            window.location.href = 'education revision.html';
        }

        function addToForm() {
            const courses = {
                course_name: course_name,
                course_institution: course_institution,
                course_begin_month: course_begin_month,
                course_begin_year: course_begin_year,
                course_end_month: course_end_month,
                course_end_year: course_end_year,
            };
            
            form.courses.push(courses);
        }

        console.log(form)
        saveToStorage();
    })
}
