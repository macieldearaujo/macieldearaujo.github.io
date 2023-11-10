import { form, displayAlert, saveToStorage, removeFromForm } from '../data/form.js'

const page = 'skills'

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', () => {
    addToForm_Idiom();
    displayIdiom();
    save();
})

addButton_ability.addEventListener('click', () => {
    addToForm_Ability();
    displayAbility();
    save();
})

displayIdiom();
displayAbility();

function displayIdiom() {
    let displayHTML_idiom = '';

    form.idioms.forEach((value) => {
        const id = value.id;
        const language = value.language;
        const proficiency = value.proficiency;

        if (language === 'default' || proficiency === 'default') {
            displayAlert();
        } else {
            displayHTML_idiom += `
    <div class="form-skills-container js-idiom-container">
        <p class="form-skills-title">${language} - ${proficiency}</p>
        <button class="bin-img bin-${page}-${id}">
            <img src="img/bin.png" style="width: 18px;">
        </button>
    </div>
    `
        }
    })
    document.querySelector('.idiom-container-result').innerHTML = displayHTML_idiom;
}

function displayAbility() {
    let displayHTML_ability = '';

    form.abilities.forEach((value) => {
        const ability = value.ability;

        if (!ability) {
            displayAlert();
        } else {
            displayHTML_ability += `
            <div class="form-skills-container">
                <p class="form-skills-title">${ability}</p>
                <button class="bin-img bin-img-skills">
                    <img src="img/bin.png" style="width: 18px;">
                </button>
            </div>    
    `
        }
    })
    document.querySelector('.ability-container-result').innerHTML = displayHTML_ability;
}

function addToForm_Idiom() {
    const language = document.querySelector('.js-form-input-language').value;
    const proficiency = document.querySelector('.js-form-input-proficiency').value;

    const idiomObject = {
        id: form.idioms.length,
        language,
        proficiency
    }

    form.idioms.push(idiomObject)
}

function addToForm_Ability() {
    const ability = document.querySelector('.js-form-input-ability').value;

    const abilityObject = {
        id: form.abilities.length,
        ability
    }

    form.abilities.push(abilityObject)
}

function save() {
    console.log(form);
    saveToStorage();
}

removeFromForm('idioms');