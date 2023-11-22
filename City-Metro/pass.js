document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passenger-details-form');
    const nameInput = form.elements['name'];
    const genderSelect = form.elements['gender'];
    const aadharInput = form.elements['aadhar'];
    const ageInput = form.elements['age'];
    const addButton = form.elements['add'];

    form.addEventListener('submit', function(event) {
        let valid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name.');
            valid = false;
        } else {
            clearError(nameInput);
        }

        if (genderSelect.value === 'select') {
            showError(genderSelect, 'Please select your gender.');
            valid = false;
        } else {
            clearError(genderSelect);
        }

        if (aadharInput.value.trim() === '' || aadharInput.value.length !== 12) {
            showError(aadharInput, 'Aadhar Number must be exactly 12 characters long.');
            valid = false;
        } else {
            clearError(aadharInput);
        }

        if (ageInput.value < 0 || ageInput.value > 100) {
            showError(ageInput, 'Age must be between 0 and 100.');
            valid = false;
        } else {
            clearError(ageInput);
        }

        if (valid === false) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            input.parentNode.removeChild(errorDiv);
        }
    }
});
