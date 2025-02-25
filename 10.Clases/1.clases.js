
// Clases en Js, esta inician en Mayuscula
// no se aplica el hoisting para las clases
// Las clases no se pueden llamar igual que las variables antes de declararlas
//let persona3 = New Persona('Carlos', 'Morales');
class Persona {
    constructor(nombre, apellido){
        // Se acostumbra colocar un _ para indicar que es privado y porque el metodo get no se puede llamar igual que la propiedad
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
}

// Instanciar un objeto
let persona1 = new Persona('Carlos', 'Morales');3
// moificando el nombre por medio del metodo set
persona1.nombre = 'Juan';
// Obteniendo el nombre por medio del metodo get
console.log(persona1._nombre);

let persona2 = new Persona('Anyeli', 'Mercedes');
console.log(persona2);

