
// Metodos constructor

function Persona (nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    // medtodo dentro de contructor 
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let padre = new Persona('Carlos', 'Lara', 'cmorales@gmail.com', 32);
console.log(padre);
padre.telefono = '1234567890';

let madre = new Persona('Laura', 'Lara', 'lmorales@gmail.com', 30);
console.log(madre);

// los e=cambios del objeto padre no afectan al objeto madre
padre.nombre = 'Carlos Alberto';
console.log(padre.nombre);
console.log(madre.nombre);
console.log(padre.telefono);

// ---
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

// otras formas de crear objetos
// la seunda forma es la mas usada en cada uno de los tipos de datos
// objetos
let miObjeto = new Object();
let miObjeto2 = {};
// cadenas
let miCadena = new String('Hola');
let miCadena2 = 'Hola';
// numeros
let miNumero = new Number(1);
let miNumero2 = 1;
// booleanos
let miBoolean = new Boolean(false);
let miBoolean2 = true;
// funciones       
let miArreglo = new Array();
let miArreglo2 = [];
// fechas
let miFuncion = new Function();
let miFuncion2 = function(){};
