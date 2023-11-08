export let form = JSON.parse(localStorage.getItem('form'));

if (!form) {
    form = {
        courses: [],
        experiences: []
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

form.courses.forEach((value) => {
    const id = value.id;
    const name = value.name;
    const institution = value.institution;
    const begin_month = value.begin_month;
    const begin_year = value.begin_year;
    const end_month = value.end_month;
    const end_year = value.end_year;

    displayHTML += `
        <section class="form-container-revision form-container-revision-${id}">
            <h3 class="form-title-revision-1">${name}</h3>
            <button class="bin-img bin-${page}-${id}">
                <img src="img/bin.png" style="width: 24px;">
            </button>
            <p class="form-title-revision-2">${institution}</p>
            <p class="form-title-revision-3">${begin_month}/${begin_year} a ${end_month}/${end_year}</p>
        </section>
        `
})

container.innerHTML = displayHTML;
}

export function removeFromForm(page) {
    form.courses.forEach((course) => {
    const id = course.id;
    const bin = document.querySelector(`.bin-${page}-${id}`);
    const containerItem = document.querySelector(`.form-container-revision-${id}`); 

    bin.addEventListener('click', () => {
        containerItem.remove();

        form.courses = form.courses.filter((c) => c.id !== id);
        console.log(form)

        saveToStorage();
    })
})
}