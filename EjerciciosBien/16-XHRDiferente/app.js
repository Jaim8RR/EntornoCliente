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
function cargarDatos(url, funcion=(r)=>console.log(r), tipo="") {
    //instancio el objeto
    let xhr = new XMLHttpRequest();

    //Preparo la petición
    xhr.open("GET", url);
    xhr.responseType = tipo;
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
function mostrarDatos(datos) { 
    // Extraigo el objeto y lo paso a array.
    datos = Object.entries(datos[34]);

    let nodo = document.createDocumentFragment();

    for (let i = 0; i < datos.length; i++) {
        let nP = document.createElement("p");
        let nS = document.createElement("strong");
        nS.textContent = datos[i][0];
        nP.append(nS, " ", datos[i][1]);
        nodo.appendChild(nP);
    }

    document.body.querySelector("h1").after(nodo);
}


let url_post = "https://jsonplaceholder.typicode.com/posts";

cargarDatos(url_post, mostrarDatos, "json");

console.log("Fuera del evento onload" , xhr.response);