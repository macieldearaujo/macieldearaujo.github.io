export let form = JSON.parse(localStorage.getItem('form'));

if (!form) {
    form = {};
}

export function saveToStorage() {
    localStorage.setItem('form', JSON.stringify(form));
}

export function displayAlert() {
    const addedMessage = document.querySelectorAll('.form-input');

    addedMessage.forEach((value) => {
        value.classList.add('form-input-alert');

        setTimeout(() => {
            value.classList.remove('form-input-alert');
        }, 200);
    })
}