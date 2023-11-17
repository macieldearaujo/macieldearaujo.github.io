import { form, displayOnScreen, saveToStorage, removeFromForm, nextPage } from '../data/form.js'
import { editFormSkills } from '../data/editform.js'

console.log(form);

const params = new URLSearchParams(window.location.search);
const executeRevision = params.get('executeRevision');
const executeAdd = params.get('executeAdd');
const id = params.get('id');

if (executeRevision) {
    editFormSkills(id, form.abilities, executeRevision);
}

const addButton_idiom = document.querySelector('.js-add-idiom');
const addButton_ability = document.querySelector('.js-add-ability');

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
    if (input === 'idiom') {
        const language = document.querySelector('.js-form-input-language');
        const proficiency = document.querySelector('.js-form-input-proficiency');
    
        const language_text = language.options[language.selectedIndex].text;
        const proficiency_text = proficiency.options[proficiency.selectedIndex].text;
    
        // Verificar se o idioma já está presente no array
        const isLanguageAlreadyAdded = form.idioms.some(item => item.language === language.value);
    
        // Verificar se o idioma não é 'default' e se o nível de proficiência não é 'default'
        if (!isLanguageAlreadyAdded && language.value !== 'default' && proficiency.value !== 'default') {
            form.idioms.push({
                id: form.idioms.length,
                language: language.value,
                language_text,
                proficiency: proficiency.value,
                proficiency_text
            });
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