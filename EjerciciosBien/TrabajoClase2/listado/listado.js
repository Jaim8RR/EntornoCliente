"use strict"

class Listado {
    constructor(lista, id, clase, tipoLista = "ul") {
        this.lista = lista;
        this.id = id; //??
        this.clase = clase;
        this.tipoLista = tipoLista;
    }
    crearLista() {
        let nodo = document.createDocumentFragment();
        let list;
        nodo.appendChild(list = document.createElement(this.tipoLista));

        list.id = this.id;
        list.className = this.clase;


        this.lista.forEach((elemento, i) => {
            let nodoli = document.createElement("li");
            nodoli.textContent = elemento;
            nodoli.id = `elemento_${i}`
            list.appendChild(nodoli);
        });

        return nodo;
    }
    //comando para poner la lista en el body:
    //document.body.appendChild(lista.crearLista());


} 