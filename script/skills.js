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
    const language = document.querySelector('.js-form-input-language').options[document.querySelector('.js-form-input-language').selectedIndex].text;
    const proficiency = document.querySelector('.js-form-input-proficiency').options[document.querySelector('.js-form-input-proficiency').selectedIndex].text;

    if (language !== 'default' || proficiency !== 'default') {
    form.idioms.push({
        id: form.idioms.length,
        language,
        proficiency
    })
}
}

function addToForm_Ability() {
    const ability = document.querySelector('.js-form-input-ability').value;

    if (ability) {
    form.abilities.push({
        id: form.abilities.length,
        ability
    })
}
}

function save() {
    console.log(form);
    saveToStorage();
}

removeFromForm('idioms', form.idioms);
removeFromForm('abilities', form.abilities);