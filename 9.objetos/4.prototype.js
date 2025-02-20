
// prototipo (prototype)
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
// con el prototype se puede agregar un metodo a todos los objetos que se creen a partir de este constructor
Persona.prototype.telefono = '123456789';



let padre = new Persona('Carlos', 'Lara', 'cmorales@gmail.com', 32);
padre.telefono = '9876543210';
console.log(padre);
padre.telefono = '9876543210';


let madre = new Persona('Laura', 'Lara', 'lmorales@gmail.com', 30);
console.log(madre);
console.log(padre.telefono);
