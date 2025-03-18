// una funcion callback es una funcion que se pasa como argumento a otra funcion
// y se ejecuta dentro de esa funcion
// Ejemplo de una funcion que recibe una funcion como argumento
// function saludar(nombre, callback) {
//     console.log(`Hola ${nombre}`);
//     callback();
// }
// // Ejemplo de una funcion que se pasa como argumento
// function despedir() {
//     console.log('Adios');
// }
// // Llamamos a la funcion saludar y le pasamos la funcion despedir como argumento
// saludar('Juan', despedir);
// // En este caso, la funcion despedir se ejecuta dentro de la funcion saludar
// // y se imprime 'Adios' después de 'Hola Juan'
// // Ejemplo de una funcion que recibe una funcion como argumento y un valor
// function sumar(a, b, callback) {
//     const resultado = a + b;
//     callback(resultado);
// }
// // Ejemplo de una funcion que se pasa como argumento
// function mostrarResultado(resultado) {
//     console.log(`El resultado es: ${resultado}`);
// }
// // Llamamos a la funcion sumar y le pasamos la funcion mostrarResultado como argumento
// sumar(5, 10, mostrarResultado);
// // En este caso, la funcion mostrarResultado se ejecuta dentro de la funcion sumar
// // y se imprime 'El resultado es: 15' después de sumar los dos números

function miFuncion1(){
    console.log('Soy la funcion 1');
}

function miFuncion2(){
    console.log('Soy la funcion 2');
}

miFuncion2();
miFuncion1();

// Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,callback){
    let resultado = op1 + op2;
    callback(`El resultado de la suma es: ${resultado}`);
}

sumar(5, 10, imprimir);

// llamadas asincronas con el uso de la funcion setTimeout
// setTimeout es una funcion que permite ejecutar una funcion después de un tiempo determinado
// en milisegundos
// en este caso, se ejecuta la funcion miFuncionCallback después de 13 segundos
// la funcion setTimeout recibe como argumento la funcion a ejecutar y el tiempo en milisegundos
function miFuncionCallback(){
    console.log('Saludos asincronos despues de 13 segundos');
}

setTimeout(miFuncionCallback, 3000); 

// tambien puedes pasarle una funcion anónima como argumento
setTimeout(function(){
    console.log('Saludos asincronos desde una funcion anonima');
}, 5000);

setTimeout(() => {
    console.log('Saludos asincronos desde una funcion flecha');
}
, 3000);
// En este caso, se ejecuta la funcion flecha después de 30 segundos


