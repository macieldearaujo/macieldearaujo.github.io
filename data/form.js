export let form = JSON.parse(localStorage.getItem('form'));

if(!form) {
    form = [];
}

export function saveToStorage() {
    localStorage.setItem('form', JSON.stringify(form));
} 

export function consoleForm() {
    const button_index = document.querySelector('.js-form-button-continue');

    button_index.addEventListener('click', () => {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('.form-input[name="phone"]').value;
        const marital_status = document.querySelector('.js-form-input-maritial-status').value;
        const country = document.querySelector('.js-form-input-country').value;
        const city =  document.querySelector('.form-input[name="city"]').value;
        const neighborhood = document.querySelector('.js-form-input-neighborhood').value;
        
        if(form.length === 0) {
            form.push({
                personalInformation: {
                    name,
                    email,
                    phone,
                    marital_status,
                },
                adress: {
                    country,
                    city,
                    neighborhood
                }
            })
        }
        saveToStorage();
        console.log(form)
    })
}