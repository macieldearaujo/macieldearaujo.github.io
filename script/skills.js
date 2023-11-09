import { form, displayAlert, saveToStorage } from '../data/form.js'

const page = 'skills'

const continueButton = document.querySelector(`.js-form-button-continue-${page}`);

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', displayOnScreen)

displayOnScreen()

function displayOnScreen() {
    let displayHTML_idiom;

    addIdiom();
    form.idioms.forEach((value) => {
        const language = value.language;
        const proficiency = value.proficiency;

        if (language === 'default' || proficiency === 'default') {
            displayAlert();
        } else {
            displayHTML_idiom += `
    <div class="form-skills-container js-idiom-container">
        <p class="form-skills-title">${language} - ${proficiency}</p>
        <button class="bin-img bin-img-skills">
            <img src="img/bin.png" style="width: 18px;">
        </button>
    </div>
    `
        }
    })
    console.log(form)
    saveToStorage();
    document.querySelector('.idiom-container-result').innerHTML = displayHTML_idiom;
}
let displayHTML_ability;

// addButton_ability.addEventListener('click', () => {
//     const ability = document.querySelector('.js-form-input-ability').value;

//     if (!ability) {
//         displayAlert();
//     } else {
//         displayHTML_ability += `
//     <div class="form-skills-container">
//         <p class="form-skills-title">${ability}</p>
//         <button class="bin-img bin-img-skills">
//             <img src="img/bin.png" style="width: 18px;">
//         </button>
//     </div>    
//     `
//         document.querySelector('.ability-container-result').innerHTML = displayHTML_ability;
//     }
// })

continueButton.addEventListener('click', addToForm)

function addToForm() {

    saveToStorage();
    console.log(form);
}

function addIdiom() {
    const language = document.querySelector('.js-form-input-language').value;
    const proficiency = document.querySelector('.js-form-input-proficiency').value;

    const idiomObject = {
        id: form.idioms.length,
        language,
        proficiency
    }

    form.idioms.push(idiomObject)
}

function addAbility() {
    const ability = document.querySelector('.js-form-input-ability').value;

    const abilityObject = {
        id: form.abilitys.length,
        ability
    }

    form.abilitys.push(abilityObject)
}