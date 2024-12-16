"use strict";
function comparar(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        if (num1 == num2) {return 3;}
        return (num1 > num2 ? 1 : 2); 
    } return -1;
    
     
}
function isNumber(...args) {
    if (args.length === 0) {
        return false;
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != "number") {
            return false;
        }
    }
    return true;
}

function isString(...args) {
    if (args.length === 0) {
        return false;
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != "string") {
            return false;
        }
    }
    return true;
}
function isBoolean(...args) {
    if (args.length === 0) {
        return false;
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != "boolean") {
            return false;
        }
    }
    return true;
}
function isFunction(...args) {
    if (args.length === 0) {
        return false;
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != "function") {
            return false;
        }
    }
    return true;
}
function isObject(...args) {
    if (args.length === 0) {
        return false;
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != "object") {
            return false;
        }
    }
    return true;
}



 