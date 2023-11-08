import { form, saveToStorage } from '../data/form.js'

checkInput('education-revision');

const container = document.querySelector('.form-container-course');
let courseHTML = '';

form.courses.forEach((course) => {
    const course_id = course.course_id;
    const course_name = course.course_name;
    const course_institution = course.course_institution;
    const course_begin_month = course.course_begin_month;
    const course_begin_year = course.course_begin_year;
    const course_end_month = course.course_end_month;
    const course_end_year = course.course_end_year;

    courseHTML += `
        <section class="form-container-revision form-container-revision-${course_id}">
            <h3 class="form-title-revision-1">${course_name}</h3>
            <button class="bin-img bin-${course_id}">
                <img src="img/bin.png" style="width: 24px;">
            </button>
            <p class="form-title-revision-2">${course_institution}</p>
            <p class="form-title-revision-3">${course_begin_month}/${course_begin_year} a ${course_end_month}/${course_end_year}</p>
        </section>
        `
})

container.innerHTML = courseHTML;

const continueButton = document.querySelector('.js-form-button-add-education-revision');

continueButton.addEventListener('click', () => {
    window.location.href = 'education.html';
})

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
    })
}

form.courses.forEach((course) => {
    const course_id = course.course_id;
    const bin = document.querySelector(`.bin-${course_id}`);
    const containerItem = document.querySelector(`.form-container-revision-${course_id}`); 

    bin.addEventListener('click', () => {
        containerItem.remove();

        form.courses = form.courses.filter((c) => c.course_id !== course_id);
        console.log(form)

        saveToStorage();
    })
})