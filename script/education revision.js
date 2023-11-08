import { form, displayAlert, saveToStorage } from '../data/form.js'

checkInput('education-revision');

inner();

function inner() {
    const course_name = form.courses.course_name;
    const course_institution = form.courses.course_institution;
    const course_begin_month = form.courses.course_begin_month;
    const course_begin_year = form.courses.course_begin_year;
    const course_end_month = form.courses.course_end_month;
    const course_end_year = form.courses.course_end_year;

    const container = document.querySelector('.form-container-course')
    let iner = '';

    iner += `
    <section class="form-section">
    <h2 class="form-title-topic">Revise o seu histórico escolar:</h2>
    <section class="form-container-revision">
        <h3 class="form-title-revision-1">${course_name}</h3>
        <button class="bin-img">
            <img src="img/bin.png" style="width: 24px;">
        </button>
        <p class="form-title-revision-2">${course_institution}</p>
        <p class="form-title-revision-3">${course_begin_month} ${course_begin_year} a ${course_end_month} ${course_end_year}</p>
    </section>
    `

    container.innerHTML = iner
}

function checkInput(page) {
    console.log(form)
    const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

    continueButton.addEventListener('click', () => {
    })
}
