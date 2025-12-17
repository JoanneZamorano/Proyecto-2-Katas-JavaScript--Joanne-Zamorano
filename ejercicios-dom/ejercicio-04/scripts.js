// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click
const botonPulsar = document.querySelector('#btnToClick');

botonPulsar.addEventListener('click', (event) => {
    console.log('Click Event Info:', event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', (event) => {
    console.log('Valor del input:', event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valorInput = document.querySelector('.value');

valorInput.addEventListener('input', (event) => {
    console.log('Valor del input:', event.target.value);
});

