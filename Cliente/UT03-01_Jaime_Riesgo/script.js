// Array para almacenar los operarios
let operarios = [];

// Función para agregar un operario
function agregarOperario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let idOp = document.getElementById('idOp').value;
    let dni = document.getElementById('dni').value;
    let cargoOp = document.getElementById('cargoOp').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let fechaContrato = document.getElementById('fechaContrato').value;

    // Validación de los datos
    if (!validarDni(dni)) {
        alert('DNI inválido.');
        return;
    }

    if (!mayorDe18(fechaNacimiento)) {
        alert('El operario debe ser mayor de 18 años.');
        return;
    }

    if (!fechaContratoValida(fechaContrato, fechaNacimiento)) {
        alert('La fecha de contrato es inválida.');
        return;
    }
    if (nombre.length > 15 ) {
        alert('El nombre no puede tener mas de 15 letras.');
        return;
    }
    if (apellido.length > 30) {
        alert('El apellido no puede tener mas de 30 letras.');
        return;
    }
    if (idOp.length > 5) {
        alert('El ID no puede tener menos de 5 digitos.');
        return;
    }
    
        
    

    if (cargoOp.length > 10) {
        alert('El cargo no puede tener mas de 10 letras.');
        return;
    }

    


    // Crear objeto operario
    const operario = {
        nombre,
        apellido,
        idOp,
        dni,
        cargoOp,
        fechaNacimiento,
        fechaContrato
    };

    // Agregar operario al array
    operarios.push(operario);

    // resetear el formulario y mostrar el array de operarios
    document.getElementById('operarioForm').reset();
    mostrarOperarios();
}

// Funciones para validar el DNI
function validarLetraDNI(dni) {
    //Lestras posibles del DNI en el orden que tienen
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  
    //Extraemos el número y la letra del DNI
    const numero = dni.substring(0, dni.length - 1);
    const letra = dni.charAt(dni.length - 1).toUpperCase();
  
    // Calculamos el resto de la división entre el número y 23
    const resto = numero % 23;
  
    // Comparamos la letra calculada con la letra del DNI
    return letra === letras.charAt(resto);
  }
function validarDni(dni) {
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;//Numero de 8 digitos y una letra ya sea mayuscula o minuscula
    
    return dniRegex.test(dni) && validarLetraDNI(dni);
}

// Función para verificar si el operario es mayor de 18 años
function mayorDe18(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    // Calculamos la edad en años
    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    // Si el mes actual es antes que el mes de nacimiento o es el mismo mes pero el día actual es anterior al día de nacimiento,
    // restamos un año a la edad
    if (
        hoy.getMonth() < fechaNac.getMonth() ||(hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())
    ) {
        edad--;
    }
   // alert(edad);

    // Devolvemos si la edad es 18 o más
    return edad >= 18;
}


// Función para verificar que la fecha de contrato sea posibled, es decir que tenga mas de 18 y que no haya sido contratado antes de nacer
function fechaContratoValida(fechaContrato, fechaNacimiento) {
    let fechaCont = new Date(fechaContrato);
    let fechaNac = new Date(fechaNacimiento);
    return fechaCont >= fechaNac && mayorDe18(fechaNac);
}

// Función para mostrar el array de operarios
function mostrarOperarios() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    operarios.forEach((operario, index) => {
        let operarioDiv = document.createElement('div');
        operarioDiv.innerHTML = 
            '<strong>Operario ' + (index + 1) + '</strong><br>' +
            'Nombre: ' + operario.nombre + ' ' + operario.apellido + '<br>' +
            'ID: ' + operario.idOp.padStart(5, '0') + '<br>' +//Añadimos ceros a la izquierda para que tenga 5 digitos
            'DNI: ' + operario.dni + '<br>' +
            'Cargo: ' + operario.cargoOp + '<br>' +
            'Fecha de Nacimiento: ' + operario.fechaNacimiento + '<br>' +
            'Fecha de Contrato: ' + operario.fechaContrato + '<br>';
        resultadoDiv.appendChild(operarioDiv);
    });
}
function precargarDatos() {
    operarios.push(//Añadimos los datos de los operarios
        { nombre: 'Juan', apellido: 'Pérez', idOp: '12345', dni: '12345678Z', cargoOp: 'Técnico', fechaNacimiento: '1985-01-01', fechaContrato: '2020-01-01' },
        { nombre: 'María', apellido: 'García', idOp: '54321', dni: '87654321X', cargoOp: 'Gerente', fechaNacimiento: '1990-05-15', fechaContrato: '2015-09-01' },
        { nombre: 'Pedro', apellido: 'Gómez', idOp: '67890', dni: '45678901Y', cargoOp: 'Administrativo', fechaNacimiento: '1970-12-31', fechaContrato: '2010-06-01' },
        { nombre: 'Ana', apellido: 'Martínez', idOp: '98765', dni: '23456789M', cargoOp: 'Técnico', fechaNacimiento: '1988-07-20', fechaContrato: '2018-03-01' },
        { nombre: 'Luis', apellido: 'Rodríguez', idOp: '135' , dni: '34567890N', cargoOp: 'Técnico', fechaNacimiento: '1995-02-28', fechaContrato: '2021-01-01' }
        );
    mostrarOperarios();
}

