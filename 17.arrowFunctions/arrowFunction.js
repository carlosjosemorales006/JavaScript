// Funciones flechas o arrow functions
// Son una forma más corta de escribir funciones en JavaScript.
// Sintaxis básica
// const nombreFuncion = (parametros) => {
//     // cuerpo de la función
// };

function miFuncion(){
    console.log("Saludos desde mi funcion")
}

miFuncion();

// const miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion flecha');
// }

const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

//miFuncionFlecha();

// const saludar = () => {

//     return "Hola desde la función flecha";
// }
const saludar = () =>  "Hola desde la función flecha";

console.log(saludar());

const regresarObjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log(regresarObjeto());

const funcionConParametros = (mensaje) => "Hola " + mensaje;
console.log(funcionConParametros("Juan"));

// Ejemplo de función flecha con parámetros y retorno implícito
const holaMundo = saludos => saludos + " desde la función flecha";
console.log(holaMundo("Hola Mundo"));