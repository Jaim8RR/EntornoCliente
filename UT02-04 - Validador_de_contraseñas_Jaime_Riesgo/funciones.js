// Función para validar la contraseña
function validatePassword(password) {
    if (password.length < 12) return false; // Comprobar si tiene al menos 12 caracteres

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSymbol = false;

    const symbols = "ºª!@#$%^&*()=?¿~'¡\\\"·¬";//simbolos de la fila de arriba del teclado español
    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        // Valido si tiene letras mayúsculas
        if (char >= 'A' && char <= 'Z') hasUppercase = true;

        // Valido si tiene letras minúsculas
        if (char >= 'a' && char <= 'z') hasLowercase = true;

        // Valido si tiene números
        if (char >= '0' && char <= '9') hasNumber = true;

        // Valido si tiene símbolos
        if (symbols.includes(char)) hasSymbol = true;

        // Valido si hay letras o números iguales, si hay dos chars iguales seguidos no es válida
        if (i > 0 && char === password[i - 1]) return false;
        
    }

    return hasUppercase && hasLowercase && hasNumber && hasSymbol;
}

// Función para generar una contraseña segura
function generatePassword() {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = "ºª!@#$%^&*()=?¿~'¡\\\"·¬";//Sibolos de arriba 
    let allCharacters = upperCase + lowerCase + numbers + symbols;
    
    let password = '';
    
    while (password.length < 12 || !validatePassword(password)) {//|| !validatePassword(password) esto si queremos que la contraseña generada sea valida siempre
        password = '';
        let lastChar = '';
        
        for (let i = 0; i < 12; i++) {
            let char = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            //da un valor aleatorio a char dentro de nuestro diccionario de caracteres

            // Evitar caracteres consecutivos
            if (lastChar && char.charCodeAt(0) === lastChar.charCodeAt(0) + 1) {
                i--;
                continue;
            }
            
            password += char;
            lastChar = char;
        }
    }
    
    return password;
}

// Función para mostrar resultados
function displayResults() {
    let generatedPassword = generatePassword();
    let isValid = validatePassword(generatedPassword);
    let generatedPasswordText = 'Contraseña Generada: ' + generatedPassword;
    document.getElementById('generated-password').textContent = generatedPasswordText;
    
    document.getElementById('generated-password').textContent = "Contraseña Generada: " + generatedPassword;
    document.getElementById('validation-result').textContent = "La contraseña generada " + (isValid ? "es segura ✅" : "no es segura ❌");
}
function validateUserPassword() {
    let userPassword = document.getElementById('user-password').value;
    let isValid = validatePassword(userPassword);

    document.getElementById('user-validation-result').textContent = "Tu contraseña " + (isValid ? "es segura ✅" : "no es segura ❌");
}
