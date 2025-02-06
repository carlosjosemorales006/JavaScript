// ejercicio para sumar los primeros 5 numero (Acumulador)

let acumulador = 0

for(let a = 0; a <= 5; a ++){

    console.log(`${acumulador} + ${a}`)

    console.log(acumulador += a)

   
}
console.log(`La suma de los numero es ${acumulador}`)

// con while
let contador = 0
while(contador <= 5){

    acumulador += contador;
    console.log(contador++)
}

console.log(`La suma de los numero es ${acumulador}`)

// do while

do {
    acumulador += contador;
    console.log(contador++)
}while(contador <= 5);

console.log(`La suma de los numero es ${acumulador}`)