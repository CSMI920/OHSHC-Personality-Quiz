// JS scripts placed here

const jsSubmitButton = document.querySelector('.js-submit-button');

console.log('jsSubmitButton', jsSubmitButton);


jsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('jsSubmitButton clicked');
    console.log('colorInput', colorInput.value);

    username.innerHTML = `, ${nameInput.value}`;
    afterSubmission.style.color = colorInput.value;

    afterSubmission.classList.add('show');
});