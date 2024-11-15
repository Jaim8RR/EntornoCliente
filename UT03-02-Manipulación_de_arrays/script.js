function esPrimo(lista) {
    arrayPrimos=[];
    lista.forEach(numero => {
        let esPrimo = true;

        if (numero == 0 || numero == 1) {
            esPrimo = false;
        }
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            arrayPrimos.push(numero);
        }
    });

    //ordenar de forma ascendente
    //quitamos los duplicados
    arrayPrimos.forEach(element => {
        let indice = arrayPrimos.indexOf(element);
        let ultimo = arrayPrimos.lastIndexOf(element);
        if (indice != ultimo) {
            arrayPrimos.splice(ultimo, 1);
        }
        
    });
    return arrayPrimos.sort();


}
function generarnumerosAleatorios(min, max, cantidad) {
    let arrayAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arrayAleatorios;
}

function edad(fechaNacimiento) {
    let today = new Date();
    console.log(today);
    let fechaNac = new Date(fechaNacimiento);
    console.log(fechaNac);

    let years = today.getFullYear() - fechaNac.getFullYear();
    if (today.getMonth() < fechaNac.getMonth() || (today.getMonth() === fechaNac.getMonth() && today.getDate() < fechaNac.getDate())) {
        years--;
    }
    let month = today.getMonth() - fechaNac.getMonth();
    if (today.getDate() < fechaNac.getDate()) {
        month--;
    }
    let days = today.getDate() - fechaNac.getDate();
    let edad = {
        years,
        month,
        days
    };
    return edad;
}

//Crea una función verificarNombre(nombre, lista) la cual comprueba que nombre no está disponible en la lista de nombres e introduce el valor en la lista, devolviendo un array con la lista y el nombre añadido de forma ordenada por nombre. En caso de ya existir devuelve -1.
function verificarNombre(nombre, lista) {
    if (lista.includes(nombre)) {
        return -1;
    }
    lista.push(nombre);
    return lista.sort();
}



function addDatos(nombreCompleto, lista) {
    let nombre = nombreCompleto.nombre;
    let apellidos = nombreCompleto.apellidos;
    lista.forEach(element => {
        if (element.nombre == nombre && element.apellidos == apellidos) {
            return -1;
        } else {
            let id = 0;
            lista.forEach(element => {//buscamos el id mas alto 
                if (element.id > id) {
                    id = element.id;
                }
            });
            id++;
            if (nombre.length > 15) {//recortamos
                nombre = nombre.substring(0, 15);
            }
            if (apellidos.length > 25) {
                apellidos = apellidos.substring(0, 25);
            }
            lista.push({
                id,
                nombre,
                apellidos
            });
            return lista.sort((a, b) => a.id - b.id);
        }


    });
}
    /*
    Crea una función llamada areas(datos), datos será un objeto con las propiedades necesarias para
    el calculo de las siguientes formas: circulo, elipse, cuadrado, rectángulo, triangulo, polígono.
    Necesitarás al menos una propiedad, tipo para que sepas que tipo de área debes calcular, las
    demás propiedades las puedes elegir libremente, pero documentar correctamente en la función.
    Devolverá el valor del área con un máximo de 6 cifras significativas.
    Personalmente hare una funcion para el circulo/eclipse y otro para poligono
    */
 


   function areas(datos){
         let area;
         switch(datos.tipo){
              case 'circulo':
                area = Math.PI * Math.pow(datos.radio,2);
                break;
                case 'elipse':
                 area = Math.PI * datos.radio1 * datos.radio2;
                 break;
                case 'poligono':
                 area = (datos.lado * datos.apotema * datos.lados) / 2;
                 break;
                default:
                 area = "No se ha encontrado el tipo de figura";
                 break;
         }
         return area.toFixed(6);
   }


   


