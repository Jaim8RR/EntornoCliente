"use strict";
/*
let prom = new Promise(function (resolve, reject) {
    //resolve
    setTimeout(() => resolve("hecho"), 3000
    );
    console.log("promesa creada");

    //reject
    setTimeout(() =>

        reject("no ha ido bien"), 2000
    );

}


);
console.log(prom);
*/
let a = 23;
let b = 45;

let prom = new Promise(function (resolve, reject) {
    //resolve
    setTimeout(() => resolve(a = 12), 1000
    );
    

    //reject
    setTimeout(() =>

        reject(b=6), 3000
    );

}


);
console.log(prom);
console.log(a);
console.log(b);
