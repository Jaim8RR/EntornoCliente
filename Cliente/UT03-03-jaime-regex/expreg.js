// 1. Función para validar el formato de un DNI español
function veriDNI(dni) {
    // Expresión regular para un DNI: 8 dígitos seguidos de una letra (mayúscula o minúscula)
    const dniRegex = /^\d{8}[A-Za-z]$/;

    // .test() devuelve true si el string cumple con el patrón, false en caso contrario
    return dniRegex.test(dni);
}

// 2. Función para validar un número de teléfono
function veriTelf(telefono) {
    // Expresión regular que permite:
    // - Dígitos: \d
    // - Caracteres especiales: (), -, /, espacios (pueden repetirse)
    const telfRegex = /^[\d\s()\-\/]+$/;

    // Verifica que el string cumple con el formato
    return telfRegex.test(telefono);
}

// 3. Función para validar un correo electrónico
function veriMail(correo) {
    // Expresión regular para correos electrónicos válidos:
    // - Inicio: letras, números, puntos, guiones bajos o guiones
    // - Arroba: obligatorio
    // - Dominio: letras, números, con un punto obligatorio (por ejemplo, ".com")
    const mailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Devuelve true si el correo cumple con el formato
    return mailRegex.test(correo);
}

// 4. Función para dividir un nombre completo en Nombre y Apellidos
function nombreCompleto(nombre) {
    // Expresión regular:
    // - Permite palabras alfabéticas y guiones
    // - Divide el texto en partes separadas por espacios
    const nombreRegex = /^([A-Za-z-]+)\s+([A-Za-z-]+)\s+([A-Za-z-]+)$/;

    // Match devuelve un array si coincide o null si no lo hace
    const match = nombre.match(nombreRegex);

    // Si coincide, devuelve un objeto con Nombre y Apellidos
    if (match) {
        return {
            Nombre: match[1],
            Apellido1: match[2],
            Apellido2: match[3],
        };
    }
    // Si no coincide, devuelve null
    return null;
}

// 5. Función para validar una contraseña
function validatePassword(passwd) {
    // Comprueba los distintos criterios uno por uno
    const hasNumber = /\d/; // Al menos un número
    const hasLower = /[a-z]/; // Al menos una minúscula
    const hasUpper = /[A-Z]/; // Al menos una mayúscula
    const hasSpecial = /[()\-_\!¿\?^$&,.]/; // Al menos un carácter especial
    const minLength = /.{12,}/; // Mínimo 12 caracteres
    const noConsecutive = /(.)\1/; // Sin caracteres consecutivos

    // Devuelve true si todos los criterios se cumplen
    return (
        hasNumber.test(passwd) &&
        hasLower.test(passwd) &&
        hasUpper.test(passwd) &&
        hasSpecial.test(passwd) &&
        minLength.test(passwd) &&
        !noConsecutive.test(passwd)
    );
}

// 6. Función para calcular operaciones matemáticas
function calculadora(operacion) {
    // Expresión regular para detectar operaciones válidas: número operador número
    const calcRegex = /^\s*(-?\d+(\.\d+)?)\s*([\+\-\*\/\%\*\*])\s*(-?\d+(\.\d+)?)\s*$/;

    // Match divide la operación en partes
    const match = operacion.match(calcRegex);

    if (!match) return null; // Si no coincide, devuelve null

    const num1 = parseFloat(match[1]); // Primer operando
    const operator = match[3]; // Operador
    const num2 = parseFloat(match[4]); // Segundo operando

    // Calcula el resultado según el operador
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }

    // Devuelve el resultado con 3 decimales
    return parseFloat(result.toFixed(3));
}

// 7. Función para convertir números entre bases numéricas
function conversorBase(numero) {
    const { hex, dec, bin, oct } = numero;
    let value;

    // Detectar cuál base se proporciona
    if (hex) value = parseInt(hex, 16);
    else if (dec) value = parseFloat(dec);
    else if (bin) value = parseInt(bin, 2);
    else if (oct) value = parseInt(oct, 8);
    else
        return {
            hex: null,
            dec: null,
            bin: null,
            oct: null,
            errorMsg: "No se proporcionó una base válida.",
        };

    // Verifica si la conversión fue correcta
    if (isNaN(value)) {
        return {
            hex: null,
            dec: null,
            bin: null,
            oct: null,
            errorMsg: "El valor proporcionado no es válido.",
        };
    }

    // Calcula y devuelve todas las conversiones
    return {
        hex: value.toString(16).toUpperCase(),
        dec: value.toFixed(3),
        bin: value.toString(2),
        oct: value.toString(8),
        errorMsg: null,
    };
}
