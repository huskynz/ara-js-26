function validatePassword (password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit) {
        return "true";
    } else {
        return "false";
    }
}

console.log(validatePassword("Password123"));
console.log(validatePassword("Pass12"));  