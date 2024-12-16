function tablaMultiplicar(numero) {
    //funcion que devuelve una tabla con la multiplicación de un número, si este numero es múltiplo de 2, 3, 5 o 7, se resaltará en la tabla
    let tabla = "<table>";
    tabla += "<tr><th colspan='2'>Tabla del " + numero + "</th></tr>";
    for (let i = 1; i <= 10; i++) {
        tabla += "<tr>";
        tabla += "<td>" + numero + " x " + i + " ="+ "</td>";//escribo la operación
        tabla += "<td";
        if (i * numero % 2 == 0||i * numero % 3 == 0||i * numero % 5 == 0||i * numero % 7 == 0) {//si es múltiplo de 2
            tabla += " class='multiplo'>";
        } else  {//si no es múltiplo de 2, 3, 5 o 7 también hay qye cerrar la etiqueta xD
            tabla += ">";
        }
        tabla +=  i * numero + "</td>";
        tabla += "</tr>";   
    }
    tabla += "</table>";
    return tabla;
}
function tabla4x3() {
    let tabla = "<table>";
    for (let i = 1; i <= 12; i++) {
        if (i % 4 == 1) {//cada 4 td, con su tabla abrimos una fila
            tabla += "<tr>";
        }
        tabla += "<td>";
        tabla += tablaMultiplicar(i);
        tabla += "</td>";
        if (i % 4 == 0) {//cada 4 td, con su tabla cerramos  la fila
            tabla += "</tr>";
        }
    }
    tabla += "</table>";
    return tabla;
}