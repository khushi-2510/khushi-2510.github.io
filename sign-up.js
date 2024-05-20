// Function to generate random captcha
function generateCaptcha() {
    let captcha = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Function to validate email
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
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('newpassword').value;
    const matchPassword = document.getElementById('matchpassword').value;
    const captcha = document.getElementById('captcha').value;
    const generatedCaptcha = document.getElementById('captchaDiv').innerHTML;

    const errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    if (!validateEmail(email)) {
        errorElement.innerHTML += 'Email is not valid (Should end with @gmail.com)<br>';
    }
    if (!validatePassword(password)) {
        errorElement.innerHTML += 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long.<br>';
    }
    if (password !== matchPassword) {
        errorElement.innerHTML += 'Passwords do not match.<br>';
    }
    if (captcha.trim() !== generatedCaptcha) {
        errorElement.innerHTML += 'Captcha code is incorrect.<br>';
    }

    if (errorElement.innerHTML !== '') {
        return false; // Prevent form submission
    }

    // If all validations pass, allow form submission
    window.location.href = 'login.html';
    return false;
}

// Generate and display captcha when page loads
window.onload = function() {
    document.getElementById('captchaDiv').innerText = generateCaptcha();
};
