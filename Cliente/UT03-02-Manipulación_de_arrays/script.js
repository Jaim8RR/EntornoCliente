function esPrimo(lista) {//checkeado
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
        arrayAleatorios.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arrayAleatorios;
}
//casos de prueba para la funcion esPrimo
console.log("casos de prueba para la funcion esPrimo");
console.log(esPrimo([1,2]));
console.log(esPrimo(generarnumerosAleatorios(1, 10000, 1000)));

function edad(fechaNacimiento) {//no funciona con fechas pasadas el dia actual
    let today = new Date();
    
    let fechaNac = new Date(fechaNacimiento);
    

    let years = today.getFullYear() - fechaNac.getFullYear();
    if (today.getMonth() < fechaNac.getMonth() || (today.getMonth() === fechaNac.getMonth() && today.getDate() < fechaNac.getDate())) {
        years--;
    }
    let month = today.getMonth() - fechaNac.getMonth();
    if (month < 0) {
        month += 12;
        years--;
    }
    let days = today.getDate() - fechaNac.getDate();
    if (days < 0) {
        month--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    let edad = {
        years,
        month,
        days
    };
    return edad;
}
//casos de prueba para la funcion edad
console.log("casos de prueba para la funcion edad");

console.log(edad("1999-12-12"));
console.log(edad("1999-11-13"));
console.log(edad("2009-12-14"));
console.log(edad("100-12-15"));


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

    for (let element of lista) {
        if (element.nombre == nombre && element.apellidos == apellidos) {
            return -1;
        }
    }

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
    return lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
//casos de prueba para la funcion addDatos
console.log("casos de prueba para la funcion addDatos");
console.log(addDatos({ nombre: "Juan", apellidos: "Perez" }, [{ id: 1, nombre: "Pedro", apellidos: "Gonzalez" }, { id: 2, nombre: "Maria", apellidos: "Lopez" }]));
console.log(addDatos({ nombre: "Juan", apellidos: "Perez" }, [{ id: 1, nombre: "Pedro", apellidos: "Gonzalez" }, { id: 2, nombre: "Maria", apellidos: "Lopez" }, { id: 3, nombre: "Juan", apellidos: "Perez" }]));
console.log(addDatos({ nombre: "Juan", apellidos: "Perez" }, [{ id: 1, nombre: "Pedro", apellidos: "Gonzalez" }, { id: 2, nombre: "Maria", apellidos: "Lopez" }, { id: 3, nombre: "Juan", apellidos: "Perez" }]));
console.log(addDatos({ nombre: "Juan", apellidos: "Perez" }, [{ id: 1, nombre: "Pedro", apellidos: "Gonzalez" }, { id: 2, nombre: "Maria", apellidos: "Lopez" }]));
console.log(addDatos({ nombre: "Juan", apellidos: "Perez" }, [{ id: 1, nombre: "Pedro", apellidos: "Gonzalez" }, { id: 2, nombre: "Maria", apellidos: "Lopez" }, { id: 3, nombre: "Juan", apellidos: "Perez" }]));
    /*
    Crea una función llamada areas(datos), datos será un objeto con las propiedades necesarias para
    el calculo de las siguientes formas: circulo, elipse, cuadrado, rectángulo, triangulo, polígono.
    Necesitarás al menos una propiedad, tipo para que sepas que tipo de área debes calcular, las
    demás propiedades las puedes elegir libremente, pero documentar correctamente en la función.
    Devolverá el valor del área con un máximo de 6 cifras significativas.
    Personalmente hare una funcion para el circulo , eclipse y otro para poligono
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
    
    console.log("casos de prueba para la funcion areas");
    console.log(areas({tipo:'circulo',radio:2.5}));
    console.log(areas({tipo:'elipse',radio1:5,radio2:-3}));
    console.log(areas({tipo:'poligono',lado:5,apotema:3,lados:5}));
    


   


