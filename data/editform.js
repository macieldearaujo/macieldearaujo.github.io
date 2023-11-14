import { form, saveToStorage, nextPage } from '../data/form.js'

export function editForm(page) {
    window.addEventListener('DOMContentLoaded', (event) => {
        const params = new URLSearchParams(window.location.search);
        const executeRevision = params.get('executeRevision');
        const id = params.get('id');

        if (executeRevision === 'true') {
            if (page === 'personal_informations') {
                editFormIndex()
            }
            if (page === 'education') {
                editFormEducation(id)
            }
        }
    });
}

export function editFormIndex() {
    const nameElement = document.querySelector('.js-form-input-name');
    const name = form.personalInformations.name;
    nameElement.value = name;

    const emailElement = document.querySelector('.js-form-input-email');
    const email = form.personalInformations.email;
    emailElement.value = email;

    const phoneElement = document.querySelector('.js-form-input-phone');
    const phone = form.personalInformations.phone;
    phoneElement.value = phone;

    const marital_statusElement = document.querySelector('.js-form-input-maritial-status');
    const marital_status = form.personalInformations.marital_status;
    marital_statusElement.value = marital_status;

    const neighborhoodElement = document.querySelector('.js-form-input-neighborhood');
    const neighborhood = form.adress.neighborhood;
    neighborhoodElement.value = neighborhood;

    const cityElement = document.querySelector('.js-form-input-city');
    const city = form.adress.city;
    cityElement.value = city;

    const countryElement = document.querySelector('.js-form-input-country');
    const country = form.adress.country;
    countryElement.value = country;

    document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
        if (!nameElement.value || !emailElement.value || !phoneElement.value || !marital_statusElement.value || !neighborhoodElement.value || !cityElement.value || !countryElement.value) {
            displayAlert();
        } else {
            form.personalInformations.name = nameElement.value;
            form.personalInformations.email = emailElement.value;
            form.personalInformations.phone = phoneElement.value;
            form.personalInformations.marital_status = marital_statusElement.value;
            form.adress.neighborhood = neighborhoodElement.value;
            form.adress.city = cityElement.value;
            form.adress.country = countryElement.value;
            saveToStorage();
            nextPage('revision.html')
        }
    })
}


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