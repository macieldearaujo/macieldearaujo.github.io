export let form = JSON.parse(localStorage.getItem('form'));

if (!form) {
    form = {
        personalInformations: {},
        adress: {},
        courses: [],
        experiences: [],
        idioms: [],
        abilities: []
    };
}

export function saveToStorage() {
    localStorage.setItem('form', JSON.stringify(form));
}

export function displayAlert() {
    const addedMessage = document.querySelectorAll('.form-input');

    addedMessage.forEach((value) => {
        value.classList.add('form-input-alert');

        setTimeout(() => {
            value.classList.remove('form-input-alert');
        }, 200);
    })
}

export function displayOnScreen(page, parameter) {
    const container = document.querySelector(`.form-container-${page}`);
    let displayHTML = '';

    parameter.forEach((value) => {
        if (page === 'ability') {
            const id = value.id;
            const abilities = value.ability;

            displayHTML += `
        <div class="container-ability container-title-revision js-container-abilities-${id}">
            <p class="form-skills-title">${abilities}</p>
            <button class="pencil-img">
                <img src="img/pencil.png" style="width: 24px;">
            </button>
            <button class="icon-img icon-${'abilities'}-${id}">
                <img src="img/bin.png" style="width: 18px;">
            </button>
        </div>
        `
        } else if (page === 'idiom') {
            const id = value.id;
            const language = value.language;
            const proficiency = value.proficiency;

            displayHTML += `
    <div class="container-idiom container-title-revision js-container-idioms-${id}">
        <p class="form-skills-title">${language} - ${proficiency}</p>
        <button class="pencil-img">
                <img src="img/pencil.png" style="width: 24px;">
            </button>
        <button class="icon-img icon-idioms-${id}">
            <img src="img/bin.png" style="width: 18px;">
        </button>
    </div>
    `
        } else {
            const id = value.id;
            const name = value.name;
            const institution = value.institution;
            const begin_month = value.begin_month;
            const begin_year = value.begin_year;
            const end_month = value.end_month;
            const end_year = value.end_year;
            let description = value.description;
            !description ? description = '' : description;

            displayHTML += `
        <section class="container-revision js-container-${page}-${id}">
            <div class="container-title-revision">
                <h3 class="title-revision-1">${name}</h3>
            <button class="pencil-img form-edit-${page}-${id}">
                <img src="img/pencil.png" style="width: 24px;">
            </button>
            <button class="icon-img icon-${page}-${id}">
                <img src="img/bin.png" style="width: 24px;">
            </button>
            </div>
            <p class="title-revision-2">${institution}</p>
            <p class="title-revision-3">${begin_month}/${begin_year} a ${end_month}/${end_year}</p>
            <p class="revision-description">${description}</p>
        </section>
        `
        }
    })
    container.innerHTML = displayHTML;
}

export function ifEmpty(page, parameter) {
    const container = document.querySelector(`.form-container-${page}`);

    if (parameter.length === 0) {
        container.innerHTML = `<div class="empty-add-div">Suas informações aparecerão aqui</div>`
    }
}

export function removeFromForm(object, parameter) {
    parameter.forEach((item) => {
        const id = item.id;
        const bin = document.querySelector(`.icon-${object}-${id}`);
        const containerItem = document.querySelector(`.js-container-${object}-${id}`);

        bin.addEventListener('click', () => {
            containerItem.remove();

            parameter.forEach((page, index) => {
                if (page.id === id) {
                    parameter.splice(index, 1);
                    return;
                }
            });
            console.log(form)
            saveToStorage();
        })
    })
}

export function nextPage(directory) {
    const button = document.querySelector('.form-button-continue');

    button.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    setTimeout(() => {
        window.location.href = directory;
    }, 1000)
}

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
            if(!nameElement.value || !emailElement.value || !phoneElement.value || !marital_statusElement.value || !neighborhoodElement.value || !cityElement.value || !countryElement.value) {
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
            if(index == id) {
                nameCourseElement.value = course.name;
                institutionElement.value = course.institution;
                beginMonthElement.value = course.begin_month;
                beginYearElement.value = course.begin_year;
                endMonthElement.value = course.end_month;
                endYearElement.value = course.end_year;
                
                document.querySelector(`.js-form-button-continue`).addEventListener('click', () => {
                if(!nameCourseElement.value || !institutionElement.value || !beginMonthElement.value || !beginYearElement.value || !endMonthElement.value || !endYearElement.value) {
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