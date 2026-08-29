const result = document.getElementById("result");
function generatePassword(length, includesUpperCase, includesLowerCase, includesNumbers, includesSymbols) {
    
    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `1234567890`;
    const symbolChars = `!@#$%^&*_+=-/.,?`;

    let allowedChars = ``;
    let password = ``;

    allowedChars += includesLowerCase ? lowercaseChars : ``;
    allowedChars += includesUpperCase ? uppercaseChars : ``;
    allowedChars += includesNumbers ? numberChars : ``;
    allowedChars += includesSymbols ? symbolChars : ``;

    if(length < 0){
        return `(password length must be at least 1 character long)`;
    }
    if(allowedChars.length === 0) {
        return `(at least one set of chars need to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]; 
    }


    
    return password;
}

const passwordLength = 12;
const includesUpperCase = true;
const includesLowerCase = true;
const includesNumbers = true;
const includesSymbols = true;

const password = generatePassword(passwordLength, 
                                  includesUpperCase, 
                                  includesLowerCase, 
                                  includesNumbers, 
                                  includesSymbols);
console.log(`Generated password: ${password}`);