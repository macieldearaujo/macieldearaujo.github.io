import { form, saveToStorage, nextPage } from '../data/form.js'

export function editFormEducation(id) {
    const nameCourseElement = document.querySelector(`.js-form-input-course`);
    const institutionElement = document.querySelector(`.js-form-input-institution`);
    const beginMonthElement = document.querySelector(`.js-form-input-begin-month`);
    const beginYearElement = document.querySelector(`.js-form-input-begin-year`);
    const endMonthElement = document.querySelector(`.js-form-input-end-month`);
    const endYearElement = document.querySelector(`.js-form-input-end-year`);


    form.courses.forEach((course, index) => {
        if (index == id) {
            nameCourseElement.value = course.name;
            institutionElement.value = course.institution;
            beginMonthElement.value = course.begin_month;
            beginYearElement.value = course.begin_year;
            endMonthElement.value = course.end_month;
            endYearElement.value = course.end_year;

            document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
                if (!nameCourseElement.value || !institutionElement.value || !beginMonthElement.value || !beginYearElement.value || !endMonthElement.value || !endYearElement.value) {
                    displayAlert()
                } else {
                    course.name = nameCourseElement.value;
                    course.institution = institutionElement.value;
                    course.begin_month = beginMonthElement.value;
                    course.begin_year = beginYearElement.value;
                    course.end_month = endMonthElement.value;
                    course.end_year = endYearElement.value;

                    saveToStorage();
                    nextPage('revision.html')
                }
            })
        }
    })
}