// Definicion de una funcion

//SE LE LLMADO PROCEDIMIENTO CUANDO LA FUNCION NO DEVUELVE UN VALOR
/*funciones con parametros*/ 
function saludar(saludo){
    console.log(saludo);
}

saludos =  "Hola mundo";

// argumentos al llamar la funcion
saludar(saludos);

// ESTA ES UNA FUNCION QUE DEVUELVE UN VALOR

function suma(num1,num2){
    return num1 + num2;
}

console.log(suma(2,3));

// paso por valor en jS
// paso por informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro){
    parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);

console.log(argumento);

// paso por referencia en JS

// paso por informacion de tipo objeto (array, object, function)

function cambiarValorObjeto(parametro){
    parametro[0] = 20;
}

let argumento2 = [10];
cambiarValorObjeto(argumento2);
console.log(argumento2);

// cadena y funciones
// cadenas inmutables

function cambiarCadena(cadena){
    cadena = "adios";
}   

let saludo = "hola";
cambiarCadena(saludo);
console.log(saludo);