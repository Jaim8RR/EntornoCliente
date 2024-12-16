"use strict";
let  nodo;
document; //todo el documento HTML
document.documentElement; //Al tag html?
document.head; //tag <head>
document.body; //tag <body>

//hijos:
document.body.children; //HTMLCollection.
document.body.childNodes;

//localización:
document.getElementById(id);
document.getElementsByClassName(clase);
document.getElementsByName(nombre);
document.getElementsByTagName(tag);

//busqueda por selector:
document.querySelector(selectorCSS); //Devuelve el primer elemento que cumpla con el selector.
document.querySelectorAll(selectorCSS); //Devuelve todos los elementos que cumplan con el selector.

nodo.parentElement; //Devuelve el nodo padre.
nodo.children; //Devuelve los nodos hijos.
nodo.firstElementChild; //Devuelve el primer nodo hijo.
nodo.lastElementChild; //Devuelve el último nodo hijo.

nodo.nextElementSibling; //Devuelve el siguiente nodo hermano.
nodo.previousElementSibling; //Devuelve el nodo hermano anterior.

nodo.parentElement.children.length;//numero de hermanos:

//creación de nodos:

//nodo = document.createElement("div");

//document.body.appendChild(nodo); //Añade un nodo al final del body.
nodo = document.createDocumentFragment(); 
nodo.appendChild(document.createElement("div"));

nodo.firstChild.id = "Contenedor";

nodo.querySelector("#Contenedor").appendChild(document.createElement("p"));

