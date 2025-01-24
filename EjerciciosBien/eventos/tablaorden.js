
let ordenAscendente = true;

function ordenarTabla(idTabla,columna) {
  let tabla = document.getElementById(idTabla);
  let filas = Array.from(tabla.tBodies[0].rows);
  //lo primero será ver si es un número o no todas las celdas de la columna
  let esNumero = true;
  for (let i = 0; i < filas.length; i++) {
    let valor = filas[i].cells[columna].textContent;
    if (isNaN(valor)) {
      esNumero = false;
      break;
    }
  }

  if (esNumero) {
    filas.sort((a, b) => {
      // se obtienen los valores de las celdas de la columna seleccionada
      let valorA = a.cells[columna].textContent;
      let valorB = b.cells[columna].textContent;
      // si el orden es ascendente, se resta el valorB del valorA
      // si el orden es descendente, se resta el valorA del valorB
      return ordenAscendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    });
  } else {//aqui entra si es un número
    filas.sort((a, b) => {
      // se obtienen los valores de las celdas de la columna seleccionada
      let valorA = parseFloat(a.cells[columna].textContent);
      let valorB = parseFloat(b.cells[columna].textContent);
      // si el orden es ascendente, se resta el valorB del valorA
      // si el orden es descendente, se resta el valorA del valorB
      return ordenAscendente ? valorA - valorB : valorB - valorA;
    });
  }  

  
  filas.forEach(fila => tabla.tBodies[0].appendChild(fila));

  ordenAscendente = !ordenAscendente;//invertimos el valor de la variable

}