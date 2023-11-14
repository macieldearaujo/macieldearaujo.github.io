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
            <button class="pencil-img js-edit-${page} form-edit-${page}-${id}">
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
    if (page === 'personal-informations') { //In case it's personal informations check if name is valid because you can't use forEach in a object
        const name = form.personalInformations.name;
        if (!name) {
            container.innerHTML = `<div class="empty-add-div">Suas informações aparecerão aqui</div>`
        }
    } else if (parameter.length === 0) {
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
                }
                refreshID(parameter)
            });

            console.log(form)
            saveToStorage();
            location.reload();
        })
    })
}

export function refreshID(parameter) {
    parameter.forEach((page, index) => {
        page.id = index;
    });
}

export function nextPage(directory) {
    const button = document.querySelector('.form-button-continue');

    button.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    setTimeout(() => {
        window.location.href = directory;
    }, 1000)
}