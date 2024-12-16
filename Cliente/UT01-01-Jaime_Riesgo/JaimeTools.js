function setTexto(id, texto) {
    /*Funcion para facilitar cambiar el texto de un
    elemento de texto en el documento html
    id: referencia al elemento
    texto: Cadena de texto a mostrar
    */
    (arguments.length == 2 && (texto ?? false) && (id ?? false))
        ? document.getElementById(id).innerText = texto
        : console.log("Error en los argumentos de la funcion setTexto");
}


//lo mio

function pedirNombreAlumno(nombreAlumno) {
          if (!nombreAlumno) {
          nombreAlumno = "No se ha introducido nombre";
          
      }
      alumno[0] = nombreAlumno;
      console.log("El nombre del alumno es :" + alumno[0])
      
  }
function pedirNotaAlumno(notaAlumno) {
    notaAlumno = notaAlumno.trim(" ");//quito posibles espacios en la nota
    if (!notaAlumno) {
        notaAlumno = "No se ha introducido nota";
        
    }

    notaAlumno = notaAlumno.replace(",", ".");


    alumno[1] = notaAlumno;
    console.log("La nota del alumno es :" + alumno[1]);

   

}
function calcularNota(alumno) {
            
    nota = alumno[1];
   
    //la array asociativa tendra el texto a escribir, el color de fondo y el nombre de la clase

    resultadoNotas = {
        Suspenso: { texto: "Necesita Mejorar", color: "red", clase: "Suspenso", notaMinima: 0, notaMaxima: 4.9 },
        Suficiente: { texto: "Suficiente", color: "orange", clase: "Suficiente", notaMinima: 5, notaMaxima: 5.4 },
        Bien: { texto: "Bien", color: "yellow", clase: "Bien", notaMinima: 5.5, notaMaxima: 6.4 },
        Notable: { texto: "Notable", color: "green", clase: "Notable", notaMinima: 6.5, notaMaxima: 8.4 },
        Sobresaliente: { texto: "Sobresaliente", color: "blue", clase: "Sobresaliente", notaMinima: 8.5, notaMaxima: 10 },
        Error: { texto: "Nota no valida", color: "black", clase: "Error", notaMinima: 10000, notaMaxima: 1000 }

    }
        


    console.log(nota);
    for (let resultado in resultadoNotas) {
        if (nota >= resultadoNotas[resultado].notaMinima && nota <= resultadoNotas[resultado].notaMaxima) {
            return '<span style="background-color:' + resultadoNotas[resultado].color + '">' + resultadoNotas[resultado].texto + '</span>';

        }
    }
    return '<span style="background-color:' + resultadoNotas.Error.color + '">' + resultadoNotas.Error.texto + '</span>';

}
