export let form = JSON.parse(localStorage.getItem('form'));

if (!form) {
    form = {
        courses: [],
        experiences: [],
        skills: []
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

export function displayOnScreen(page) {    
    const container = document.querySelector('.form-container');
    let displayHTML = '';
    let i;
    page === 'education' ? i = form.courses : i = form.experiences;

i.forEach((value) => {
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
        <section class="form-container-revision form-container-revision-${id}">
            <h3 class="form-title-revision-1">${name}</h3>
            <button class="bin-img bin-${page}-${id}">
                <img src="img/bin.png" style="width: 24px;">
            </button>
            <p class="form-title-revision-2">${institution}</p>
            <p class="form-title-revision-3">${begin_month}/${begin_year} a ${end_month}/${end_year}</p>
            <p class="form-revision-description">${description}</p>
        </section>
        `
})

container.innerHTML = displayHTML;
}

export function removeFromForm(page) {
    let i = page === 'education' ? form.courses : form.experiences;
    
    i.forEach((course) => {
    const id = course.id;
    const bin = document.querySelector(`.bin-${page}-${id}`);
    const containerItem = document.querySelector(`.form-container-revision-${id}`); 

    bin.addEventListener('click', () => {
        containerItem.remove();

        i.forEach((page, index) => {
            if (page.id === id) {
                i.splice(index, 1);
                return;
            }
        });
        console.log(form)

        saveToStorage();
    })
})
}