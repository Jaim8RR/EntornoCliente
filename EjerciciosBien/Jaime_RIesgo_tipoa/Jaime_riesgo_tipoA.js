//DAVID: Resultado:
let resultado = {
    ej1:0,
    ej2:0,
    ej3:0,
    ej4:0,
    ej5:0,
    ej6:0,
    ej7:0
  };
  function nota(){
    let total = Object.values(resultado).reduce((acc,e)=>acc+e);
    return total;
  }
  //DAVID: Fin Resultado:




resultado.ej1=1;
//Ejercicio1
function comparacion(num1, num2) {
    

    if (num1 !== null && num2 !== null && num1 !== "" && num2 !== "" && typeof num1 == "number" && typeof num2 == "number") {
        if (num1 == num2) {
            return 0;//iguales
        }
        if (num1 >= num2) {
            return 1;//numero1 mayor a numero2
        } else {
            return 2;//numero2 mayor a numero1
        }
    }

}

resultado.ej2=0.5;
//DAVID: Tiene diversos errores, algunos de concepto básico.
//ejercicio2
function nombre(nombreCompleto) {
    //console.log(typeof nombreCompleto);               //DAVID: Comento esto para que no moleste.
    let persona = {
        nombreCompleto: "",
        apellido_1: "",
        apellido_2: "",
        nombre: "",
        error: true,
    };

    let nombre = "";            //DAVID: Añado esto para que funcione algo mejor.

    if (nombreCompleto != "" && nombreCompleto != null && nombreCompleto != undefined) {
        //console.log("entro");                          //DAVID: Comento esto para que no moleste.
        let nombreSeparado = nombreCompleto.split(" ");
        nombre = nombreSeparado[0];
        let apellido_1 = nombreSeparado[1];
        let apellido_2 = "";
        //console.log(nombreSeparado[2]);                        //DAVID: Comento esto para que no moleste.
        if (nombreSeparado[2]) {
            apellido_2 = nombreSeparado[2];
        }



        persona.nombreCompleto = nombreCompleto;
        persona.apellido_1 = apellido_1;
        persona.apellido_2 = apellido_2;
        persona.nombre = nombre;            //DAVID: al no declarar nombre dentro de la función, toma que es la función nombre();
        persona.error = false;

    }
    return persona;
}

resultado.ej3=1;
//ejercicio3
function verificaTexto(cadena) {
    let dicionario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚáéíóú";
    let contadorEspaciosConsecutivos = 0;
    let charBien;
    
        
    

    if (cadena != null && cadena != undefined && typeof cadena =="string") {

        for (let i = 0; i < cadena.length; i++) {

            for (let j = 0; j < dicionario.length; j++) {
              
                if (cadena[i] == dicionario[j]) {
                    charBien = true;
                    contadorEspaciosConsecutivos = 0;
                    break;
                } else if (cadena[i] == " " && contadorEspaciosConsecutivos <= 0) {
                    charBien = true;
                    contadorEspaciosConsecutivos++;
                   
                    break;

                } else {
                    charBien = false;
                }


            }
            if (charBien == false) {
                break;
            }

        }
        let textoMinusculas = cadena.toLowerCase();
        let array = [];
        if (charBien) {
            array.push(textoMinusculas);
        } else {
            array.push("");
        }

        array.push(charBien);
        return array;



    } else {
        return "sin definir o null";
    }
   
}

resultado.ej4=0.5;
//DAVID: no toma los valores por defecto.
//DAVID: Saco la función de dentro de la función del ejercicio3.
 //ejercicio 4
 function construirEnlace(objeto) {
    let href = objeto.href;
    let id = objeto.id;
    let target = objeto.target;
    let clase = objeto.class;
    let texto = objeto.texto;
    //<a href="" id="" class="" target="">texto</a> si se sustituyes por las comillas deberia tirar ya que es el pordefecto
    return `<a href=${href} target=${target} class=${clase} id=${id}>${texto}</a>`;
}


resultado.ej5=0.8
//DAVID: no contralas undefined ni "" en cada elemento.
//ejercicio 5
function listaHTML(lista) {
    if (lista != null && lista != undefined && lista != "") {
        let cadena = "<ul>"

        for (let index = 0; index < lista.length; index++) {
            cadena += "<li>" + lista[index] + "</li>";

        }
        cadena += "</ul>";
        return cadena;
    } else return "valor erroneo"

}



resultado.ej7=0;
//DAVID: Mal planteado.
//DAVID: //Ejercicio 7.
function comprobarIBAN(iban) {
    iban = iban.replace(".", " ").replace("-", " ");
    let pais;
    let control1;
    let control2;
    let sucursal;
    let ncc
    iban.split();

    if (iban != null && iban != undefined && iban != "") {

        if (iban.length > 28 || iban.length < 24) {
            return "iban muy corto o largo"

        }
        for (let index = 0; index < iban.length; index++) {
            if(iban[index]<=1) {
                pais = iban[index];
            }
            else if(iban[index]>1 && iban[index]<=1) {
                control1 = iban[index];
            }
            else if(iban[index]>1 && iban[index]<=1) {
                control1 = iban[index];
            } else if(iban[index]>1 && iban[index]<=1) {
                control = iban[index];
            }
            
            
        }


    }

}





