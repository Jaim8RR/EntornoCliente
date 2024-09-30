function setTexto(id , texto) {
    /*Funcion para facilitar cambiar el texto de un
    elemento de texto en el documento html
    id: referencia al elemento
    texto: Cadena de texto a mostrar
    */
   (arguments.length == 2 && (texto ?? false) && (id ?? false)) 
   ? document.getElementById(id).innerText = texto 
   : console.log("Error en los argumentos de la funcion setTexto");

   
    
    
    }

    