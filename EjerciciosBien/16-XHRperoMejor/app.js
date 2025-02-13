//"use strict";
//
////Ruta al servidor
//let url =  "texto.txt";
//
//let xhr = new XMLHttpRequest();
//
////Preparamos la petición comunicacion
//xhr.open("GET", url);
//
////Lanzamos la petición de comunicación
//xhr.send();
//
//xhr.onload = function () {
//    if (xhr.status == 200) {
//        console.log("la respuesta es: ");
//        console.log(xhr.responseText);
//    } else {
//        console.error("Error al cargar el fichero: " + xhr.status);
//    }
//}
//console.log("Fuera del evento onload" , xhr.response);
function cargarDatos(url, funcion) {
    //instancio el objeto
    let xhr = new XMLHttpRequest();

    //Preparo la petición
    xhr.open("GET", url);

    //Lanzo la petición
    xhr.send();

    //cuando se cargue la respuesta
    xhr.onload = function () {
        if (xhr.status == 200) {
            //respuesta correcta

            funcion(xhr.response);
        } else {
            console.error("Error al cargar el fichero: " + xhr.status);
        }

    }
}
function cargarParrafo(datos) {
    let nP = document.createElement("p");
    nP.style.whiteSpace = "pre-wrap";
    nP.textContent = datos;
    document.body.querySelector("h1").after(nP);
}
