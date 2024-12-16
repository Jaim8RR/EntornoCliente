//clase DNI
"use strict";

class DNI {
    constructor (entrada){
        this.entrada = entrada;
        this.dniFormateado ="no se ha podido formatear";
        this.error = this.getDniFormateado;
        this.numeros ="";
        this.letra ="";
    }
    get getDniFormateado(){
        if (this.verificarNumeros() &&this.verificarLetra()&&this.calcularLetra()){
        this.dniFormateado = this.numeros + this.letra;
        return false;
    }
    return true;
    }

    
     verificarNumeros(){
      
       let er = /[0-9]/g
   let numeros =  this.entrada.match(er);
        console.log(numeros);
        if(!(numeros.length<9 &&numeros.length>0)){
           return false;
        }
        this.numeros= numeros.join("").padStart(8,"0");
       
        return true;
    }
    
    verificarLetra(){
        let er=/[a-zA-Z]$/;
        if(!er.test(this.entrada)){
            return false;
        }
        this.letra = this.entrada.match(er);
        return true;
    }
    




    calcularLetra(){
        let dni = this.numeros + this.letra;
       
            //Lestras posibles del DNI en el orden que tienen
            const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
          
            //Extraemos el número y la letra del DNI
            const numero = dni.substring(0, dni.length - 1);
            const letra = dni.charAt(dni.length - 1).toUpperCase();
          
            // Calculamos el resto de la división entre el número y 23
            const resto = numero % 23;
          
            // Comparamos la letra calculada con la letra del DNI
            return letra === letras.charAt(resto);
          
    }
  

}
