function mayusculas(texto){
    //asumo que el usuario no usarará tildes raras que no estén en el idioma español.
    if(texto == null || texto == ""){
        return "No has introducido nada";
    }
    let textoMayusculas = texto.toUpperCase();
    //Usaria esto si pudiera usar expresiones regulares: let textoSinTildes = textoMayusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    let textoSinTildes = textoMayusculas.replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U");
    
    
    return textoSinTildes;
}

function numeros(numero){
    if(numero == null || numero == ""){
        return "No has introducido nada";
    }
    let numeroPunto = numero.replace(",", ".");
    return numeroPunto;
}

function comprobar(texto){
    //asumo que el usuario no usarará tildes raras que no estén en el idioma español.
    //si el usuario introduce un número y un texto esto se considerará un texto.
    //si el usuario cancela la entrada se considerará que no ha introducido nada.
    
    if(texto == null || texto == ""){
        return "No has introducido nada";
    }
    let textoAux = texto;
    textoAux =textoAux.replace(",", ".");
    if(isNaN(textoAux)){
        return mayusculas(texto);
    }else{
        return numeros(texto);
    }
}