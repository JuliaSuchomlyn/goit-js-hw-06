const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', () => {
    if (textInput.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');

    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    };
});
    
// function validationInput () {
//     if (textInput.value.length !== Number(textInput.dataset.length)) {
//         textInput.classList.remove('valid');
//         textInput.classList.add('invalid');

//     } else {
//         textInput.classList.remove('invalid');
//         textInput.classList.add('valid');
//     };

// };

    
//     const validation = validationInput.currentTarget;
//     const validationLength = Number(input.dataset.length);
//     console.log(validationLength);
//     if (validation.value.length === validationLength) {
//         validation.classList.remove('invalid');
//         validation.classList.add('valid');
//     }
//     validation.classList.remove('valid');
//     validation.classList.add('invalid');

// });