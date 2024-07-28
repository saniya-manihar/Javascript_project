const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "#$%&'()*+,-./:;<=>?@";

function createPassword() {
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    const allChars = uppercase + lowercase + numbers + symbol;

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordInput.value = password;
}

generateBtn.addEventListener("click", createPassword);
