import { form, saveToStorage, nextPage, displayAlert } from '../data/form.js'

export function editEducation(page, page2, link) {
    const button = document.querySelectorAll(`.js-edit-${page}`);

    button.forEach((buttonSelected, index) => {
        buttonSelected.addEventListener('click', () => {
            window.location.href = `${page2}.html?executeRevision=${link}&id=${index}`;
        })
    })
}

export function editForm(id, object, link) {
    const nameCourseElement = document.querySelector(`.js-form-input-title`);
    const institutionElement = document.querySelector(`.js-form-input-institution`);
    const beginMonthElement = document.querySelector(`.js-form-input-begin-month`);
    const beginYearElement = document.querySelector(`.js-form-input-begin-year`);
    const endMonthElement = document.querySelector(`.js-form-input-end-month`);
    const endYearElement = document.querySelector(`.js-form-input-end-year`);


    object.forEach((item, index) => {
        if (index == id) {
            nameCourseElement.value = item.name;
            institutionElement.value = item.institution;
            beginMonthElement.value = item.begin_month;
            beginYearElement.value = item.begin_year;
            endMonthElement.value = item.end_month;
            endYearElement.value = item.end_year;

            if(object == form.experiences) { //If it's experience, add a description
                const description = document.querySelector('.js-form-input-description');
                description.textContent = item.description;
            }

            document.addEventListener('keydown', (event) => {
                if(event.key === 'Enter') {
                    clickContinue(item)
                }
            })

            document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
                clickContinue(item)
            })
        }
    })

    function clickContinue(item) {
        if (!nameCourseElement.value || !institutionElement.value || !beginMonthElement.value || !beginYearElement.value || !endMonthElement.value || !endYearElement.value) {
            displayAlert()
        } else if (beginYearElement.value > endYearElement.value || (beginYearElement.value === endYearElement.value && beginMonthElement.value > endMonthElement.value)) {
            displayAlert();
        } else {
            item.name = nameCourseElement.value;
            item.institution = institutionElement.value;
            item.begin_month = beginMonthElement.value;
            item.begin_year = beginYearElement.value;
            item.end_month = endMonthElement.value;
            item.end_year = endYearElement.value;
            
            if(object == form.experiences) { //If it's experience, add a description
                const description = document.querySelector('.js-form-input-description');
                item.description = description.textContent;
            }

            saveToStorage();
            nextPage(`${link}.html`)
    }}
}

export function editFormSkills(id, object, link) {
    const ability = document.querySelector('.js-form-input-ability').value;
    
    object.forEach((item, index) => {
        if (index == id) {
            language.value = item.language;
            proficiency.value = item.proficiency;
        }
    })
}