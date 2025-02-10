// las matrices son arreglo de dos dimensiones

let matriz = [[100,200,300],[400,500,600]]
// esta matriz tiene dos filas y tres columnas
// modificar valores
/*fila 1
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
//fila 2
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;
*/
console.log(matriz[1][2]); 

// me dice cuanta dimension o filas tiene la matriz
console.log(matriz.length)
// me dice cuantas columnas tienes esa fila en la matriz
console.log(matriz[0].length)
console.log(matriz[1].length)
// recorriendio una matriz
for (let i = 0; i < matriz.length; i++) {
    // Recorre las filas
    for (let j = 0; j < matriz[i].length; j++) {
        // Recorre las columnas
        console.log(`Elemento: ${i}:${j} = ${matriz[i][j]}`);
    }
}