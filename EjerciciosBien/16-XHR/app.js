"use strict";

//Ruta al servidor
let url =  "texto.txt";

let xhr = new XMLHttpRequest();

//Preparamos la petición comunicacion
xhr.open("GET", url);

//Lanzamos la petición de comunicación
xhr.send();

xhr.onload = function () {
    if (xhr.status == 200) {
        console.log("la respuesta es: ");
        console.log(xhr.responseText);
    } else {
        console.error("Error al cargar el fichero: " + xhr.status);
    }
}
console.log("Fuera del evento onload" , xhr.response);
