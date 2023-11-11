import { form, displayAlert, displayOnScreen, saveToStorage, removeFromForm } from '../data/form.js'

const page = 'skills'

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', () => {
    addToForm_Idiom();
    displayIdiom();
    save();
    removeFromForm('idioms', form.idioms);
})

addButton_ability.addEventListener('click', () => {
    addToForm_Ability();
    displayOnScreen('ability', form.abilities);
    save();
    removeFromForm('abilities', form.abilities);
})

displayIdiom();
displayOnScreen('ability', form.abilities);

export function displayIdiom() {
    let displayHTML_idiom = '';

    form.idioms.forEach((value) => {
        const id = value.id;
        const language = value.language;
        const proficiency = value.proficiency;

        if (language === 'default' || proficiency === 'default') {
            displayAlert();
        } else {
            displayHTML_idiom += `
    <div class="form-idioms-container js-container-${'idioms'}-${id}">
        <p class="form-skills-title">${language} - ${proficiency}</p>
        <button class="icon-img icon-${'idioms'}-${id}">
            <img src="img/bin.png" style="width: 18px;">
        </button>
    </div>
    `
        }
    })
    document.querySelector('.idiom-container-result').innerHTML = displayHTML_idiom;
}

function addToForm_Idiom() {
    const languageElement = document.querySelector('.js-form-input-language');
    const proficiencyElement = document.querySelector('.js-form-input-proficiency');

    const language = languageElement.options[languageElement.selectedIndex].text;
    const proficiency = proficiencyElement.options[proficiencyElement.selectedIndex].text;

    const idiomObject = {
        id: form.idioms.length,
        language,
        proficiency
    }
    if (language !== 'default' || proficiency !== 'default') {
    form.idioms.push(idiomObject)
}
}

function addToForm_Ability() {
    const ability = document.querySelector('.js-form-input-ability').value;

    const abilityObject = {
        id: form.abilities.length,
        ability
    }
    if (ability) {
    form.abilities.push(abilityObject)
}
}

function save() {
    console.log(form);
    saveToStorage();
}

removeFromForm('idioms', form.idioms);
removeFromForm('abilities', form.abilities);