function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(email);
}

// Function to validate password
function validatePassword(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return pattern.test(password);
}

// Function to validate form
function validateLoginForm() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    if (!validateEmail(username) || !validatePassword(password)) {
        errorElement.innerHTML += 'Wrong credentials.<br>';
    }
    // if (!validatePassword(password)) {
    //     errorElement.innerHTML += 'Wrong credentials.<br>';
    // }
    

    if (errorElement.innerHTML !== '') {
        return false; // Prevent form submission
    }

    // If all validations pass, allow form submission
    window.location.href = 'landing.html';
    return false;
}