function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(email);
}

function validateForm() {
    const email = document.getElementById('email').value;

    const errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    if (!validateEmail(email)) {
        errorElement.innerHTML += 'Invalid Email<br>';
    }
    if (errorElement.innerHTML !== '') {
        return false; // Prevent form submission
    }

    // If all validations pass, allow form submission
    window.location.href = 'login.html';
    return false;
}