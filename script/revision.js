import { form, displayAlert, saveToStorage, nextPage } from '../data/form.js'

console.log(form)
personalInformations()

function personalInformations() {
    const name = form.personalInformations.name;

    alert(name)
}

