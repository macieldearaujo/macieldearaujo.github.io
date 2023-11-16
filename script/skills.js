import { form, displayOnScreen, saveToStorage, removeFromForm, nextPage } from '../data/form.js'

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

console.log(form);

addButton_idiom.addEventListener('click', () => {
    addToForm('idiom');
    displayOnScreen('idiom', form.idioms);
    removeFromForm('idioms', form.idioms);
    console.log(form);
})

addButton_ability.addEventListener('click', () => {
    addToForm('ability');
    displayOnScreen('ability', form.abilities);
    removeFromForm('abilities', form.abilities);
    console.log(form);
})

document.querySelector('.js-form-button-continue').addEventListener('click', () => {
    nextPage('revision.html')
}) 

displayOnScreen('ability', form.abilities);
displayOnScreen('idiom', form.idioms);

function addToForm(input) {
    if (input === 'idiom') { // if it's idiom save to idiom object
        const languageElement = document.querySelector('.js-form-input-language');
        const proficiencyElement = document.querySelector('.js-form-input-proficiency');

        const language = languageElement.options[languageElement.selectedIndex].text;
        const proficiency = proficiencyElement.options[proficiencyElement.selectedIndex].text;

        if (language !== 'default' || proficiency !== 'default') {
            form.idioms.push({
                id: form.idioms.length,
                language,
                proficiency
            })
        }
    } else if (input === 'ability') { // if it's ability save to ability object
        const ability = document.querySelector('.js-form-input-ability').value;

        if (ability) {
            form.abilities.push({
                id: form.abilities.length,
                ability
            })
        }
    }
    saveToStorage()
}

removeFromForm('idioms', form.idioms);
removeFromForm('abilities', form.abilities);