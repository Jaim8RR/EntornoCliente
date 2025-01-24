
function enlaces(miArray){
    let ul = document.createElement("ul");
    for (let i = 0; i < miArray.length; i++) {
     
        let nodoLi = document.createElement("li");
        let nodoA = document.createElement("a");
        nodoA.textContent = miArray[i][0];
        nodoA.href = miArray[i][1];
        nodoLi.appendChild(nodoA);
        ul.appendChild(nodoLi);
    
    }
};
    return ul;
    function formatoEnlaces(){

    };