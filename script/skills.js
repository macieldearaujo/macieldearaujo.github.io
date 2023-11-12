import { form, displayOnScreen, saveToStorage, removeFromForm } from '../data/form.js'

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', () => {
    addToForm_Idiom();
    displayOnScreen('idiom', form.idioms);
    save();
    removeFromForm('idioms', form.idioms);
})

addButton_ability.addEventListener('click', () => {
    addToForm_Ability();
    displayOnScreen('ability', form.abilities);
    save();
    removeFromForm('abilities', form.abilities);
})

displayOnScreen('ability', form.abilities);
displayOnScreen('idiom', form.idioms);

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