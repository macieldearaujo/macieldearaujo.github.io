export let form = JSON.parse(localStorage.getItem('form'));

if (!form) {
    form = {
        courses: []
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

export function removeFromForm(page) {
    form.courses.forEach((course) => {
    const course_id = course.course_id;
    const bin = document.querySelector(`.bin-${page}-${course_id}`);
    const containerItem = document.querySelector(`.form-container-revision-${course_id}`); 

    bin.addEventListener('click', () => {
        containerItem.remove();

        form.courses = form.courses.filter((c) => c.course_id !== course_id);
        console.log(form)

        saveToStorage();
    })
})
}