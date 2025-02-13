"use strict";

document.addEventListener("DOMContentLoaded", cargado);
function cargado() {
    console.log("Documento cargado");
}
function cargarScript(src) {
    let nodo = document.createElement("script")
    nodo.src = src;
    nodo.onload = () => console.log("Script cargado");
    nodo.onerror = () => console.error("Error al cargar el script");

    document.head.appendChild(nodo);


    }
