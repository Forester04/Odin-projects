const passwordInput = document.getElementById('password_input');
const confirmPasswordInput = document.getElementById('password_confirmation');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match!');
        return; // Stop if passwords don't match
    }

    // If passwords match, submit the form (or perform other actions)
    // Here, replace "console.log('Form submitted');" with your desired action
    console.log('Form submitted');
});