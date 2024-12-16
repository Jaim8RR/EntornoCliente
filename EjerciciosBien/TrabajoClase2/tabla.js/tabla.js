"use strict";

class Tabla {//mas que una tabla es un calendario
    constructor(lista, id, clase,titulo) {// lista es un array de arrays, id es el id de la tabla, clase es la clase de la tabla
        this.titulo = titulo
        this.lista = lista;//Llega una array bidimensional rectangular, la primera fila será el thead(titulo)
        this.id = id; 
        this.clase = clase;
    }

    //la tabla sera un calendario con los dias de la semana en la primera fila y los dias del mes en las siguientes filas
    crearTabla() {
        //creo un nodo para la tabla
        let nodo = document.createDocumentFragment();
        //creo la tabla
        let table = document.createElement("table");
        //agrego la tabla al nodo
        nodo.appendChild(table);
        //le pongo el id y la clase a la tabla
        table.id = this.id;
        table.className = this.clase;
        //creo el titulo de la tabla, debe ocupar toda la tabla y tener el texto del titulo 
        let titulo = document.createElement("thead");


        titulo.textContent = this.titulo;
        titulo.className = "titulo";
        titulo.colSpan = this.lista[0].length;
        
        table.appendChild(titulo);
        //creo el thead y lo agrego a la tabla
        let thead = document.createElement("thead");
        table.appendChild(thead);
        
        
        


        let tr = document.createElement("tr");
        thead.appendChild(tr);

        //la primera array de la array de arrays sera el titulo de las columnas
        this.lista[0].forEach((elemento, i) => {
            let th = document.createElement("th");
            //le pongo el texto a la celda
            th.textContent = elemento;
            //le pongo el id a la celda , y lo agrego a la fila importante las comillas francesas para poder poner el valor de i
            th.id = `elemento_${i}`;
            th.className = `celda${i} titulo`
            tr.appendChild(th);
        });

        //creo el tbody y lo agrego a la tabla

        let tbody = document.createElement("tbody");
        table.appendChild(tbody);

        //creo las filas y las agrego al tbody, ignoro la primera fila que ya la he añadido como titulo de las columnas
        this.lista.forEach((elemento, i) => {
            if (i !== 0) {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                elemento.forEach((elemento, i) => {
                    let td = document.createElement("td");
                    td.textContent = elemento;
                    td.id = `elemento_${i}`;
                    td.className = `celda${i} dato`
                    tr.appendChild(td);
                });
            }
        });

        return nodo;
    }






}
//Metodo para crear un mes aleatorio para ver como quedaria la tabla, un mes puede tener de 28 a 31 dias.
function mesAleatorio() {
    let dias = Math.floor(Math.random() * 4) + 28;
    let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let mes = [];
    mes.push(diasSemana);
    //la primeraSemana puede tener hasta 6 dias en blanco al principio
    let primeraSemana = [];
    let diasBlanco = Math.floor(Math.random() * 7);
    for (let i = 0; i < diasBlanco; i++) {
        primeraSemana.push("");
    }
    //para la primera semana dias en blanco + los dias del mes
    for (let i = 1; i <= 7 - diasBlanco; i++) {
        primeraSemana.push(i);
    }
    mes.push(primeraSemana);
    //el resto de las semanas
    let semana = [];
    for (let i = 7 - diasBlanco + 1; i <= dias; i++) {
        semana.push(i);
        if (semana.length === 7) {
            mes.push(semana);
            semana = [];
        }
    }
    //para la ultima semana
    if (semana.length !== 0) {
        for (let i = semana.length + 1; i <= 7; i++) {
            semana.push("");
        }
        mes.push(semana);
    }





  
    return mes;
    


}


//comandos para poner una tabla de ejemplo en el body, con datos de ejemplo:
let tabla = new Tabla(mesAleatorio(), "calendario", "tabla","Calendario");
document.body.appendChild(tabla.crearTabla());











