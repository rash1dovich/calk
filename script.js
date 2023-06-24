
const buttons = document.querySelectorAll('.button');

const input = document.querySelector('.input');


buttons.forEach(button => {
    button.addEventListener('click', () => {

        const value = button.getAttribute('data-value');

        if (value === 'clear') {

            input.value = '';
        } else if (value === '=') {
            input.value = eval(input.value);
        } else {

            input.value += value;
        }
    });
});
