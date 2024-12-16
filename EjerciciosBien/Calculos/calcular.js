"use strict";
class Calcular{
    constructor(num1 = 0,num2 = 0,acum =0){
        this.num1 = num1;
        this.num2 = num2;
        this.acumulador = 0;
        
    }
    set setnum1(x){
        this.num1 = x;
      
    }
    set setnum2(x){
        this.num2 = x;
      
    }
    set setAcum(x){
        this.acumulador = x;
    }
    get getnum1(){
        return this.num1;
    }
    get getnum2(){
        return this.num2;
    }
    get getAcum(){
        return this.acumulador;
    }
    get getsuma(){
        return this.num1 + this.num2;
    }
    get resultadosuma(){// para que no se modifique sumar
        return this.sumar();
    }
    //metodos
    sumar(x=this.num1, y=this.num2){
        return x + y;
    }
    restar(x=this.num1, y=this.num2){
        return x - y;
    }
    multiplicar(x=this.num1, y=this.num2){
        return x * y;
    }
    dividir(x=this.num1, y=this.num2){
        return x / y;
    }
    modulo(x=this.num1, y=this.num2){
        return x % y;
    }


     
    
}