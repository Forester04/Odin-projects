const form = document.getElementById('myListing');
const passwordInput = document.getElementById('password_input');
const confirmPasswordInput = document.getElementById('password_confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting by default

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match!');
        return; // Stop the function if passwords don't match
    }

    // If passwords match, submit the form
    form.submit();
});