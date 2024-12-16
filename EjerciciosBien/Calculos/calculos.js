"use strict";





numero1.style.textAlign = "right";
numero2.style.textAlign = "right";

let resultado = new Calcular(0,0);
function pasarNums(x){
let resultado = new Calcular(Number(numero1.value),Number(numero2.value));
resultadoOperacion.innerText = resultado[x]();

   
    
};


