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
    let displayHTML_A = '';

    parameter.forEach((value) => {
        if (page === 'ability') {
            const id = value.id;
            const abilities = value.ability;

            displayHTML_A += `
                <section class="container-ability js-container-${page}-${id}">
                    <div class=" form-abilities-container js-container-${'abilities'}-${id}">
                        <p class="form-skills-title">${abilities}</p>
                        <button class="icon-img icon-${'abilities'}-${id}">
                            <img src="img/bin.png" style="width: 18px;">
                        </button>
                    </div>
                </section>
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
            <h3 class="title-revision-1">${name}</h3>
            <button class="icon-img icon-${page}-${id}">
                <img src="img/bin.png" style="width: 24px;">
            </button>
            <p class="title-revision-2">${institution}</p>
            <p class="title-revision-3">${begin_month}/${begin_year} a ${end_month}/${end_year}</p>
            <p class="revision-description">${description}</p>
        </section>
        `
        }
    })
    if (page === 'ability') {
        container.innerHTML = displayHTML_A;
    } else {
        container.innerHTML = displayHTML;
    }
}

export function displayOnScreenAbility() {
    let displayHTML_ability = '';

    form.abilities.forEach((value) => {
        const id = value.id;
        const ability = value.ability;

        if (!ability) {
            displayAlert();
        } else {
            displayHTML_ability += `
            <div class=" form-abilities-container js-container-${'abilities'}-${id}">
                <p class="form-skills-title">${ability}</p>
                <button class="icon-img icon-${'abilities'}-${id}">
                    <img src="img/bin.png" style="width: 18px;">
                </button>
            </div>    
    `
        }
    })
    document.querySelector('.ability-container-result').innerHTML = displayHTML_ability;
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