
// Clase Padre
// un que no te agrega de manera literal todas las clases heredan de la clase Object (osea que llevan un extends Object)
// pero no es necesario colocarlo
// Object contiene varios metodos que se pueden utilizar en las clases

class Persona {

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido
    }

    get nombre(){

        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){

        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    nombreCompleto(){

        return `${this._nombre} ${this._apellido}`;
    }

    toString(){
        // se aplica polimorfismo
        // se llama al metodo nombreCompleto de la clase padre
        return this.nombreCompleto();
    }


}

// Clase hija
// se usa la palabra reservada extends para heredar de la clase padre

class Empleado extends Persona{

    constructor( nombre, apellido, departamento){
        // se usa la palabra reservada super para llamar al constructor de la clase padre
        super(nombre, apellido);
        this._departamento = departamento

    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }

    // Sobreescritura de metodos o polimorfismo
    // es cuando un metodo de la clase padre se sobreescribe en la clase hija
    // polimosfismo es la capacidad de un objeto de comportarse de varias formas
    nombreCompleto(){
        // con super se puede acceder a los atributos y metodos de la clase padre
        return `${super.nombreCompleto()}, ${this._departamento}`
    }

}


let persona1 = new Persona('Francisco', 'Morales');
console.log(persona1);
console.log(persona1.toString());

let empleado1 = new Empleado( 'Lucas', 'Morales','Sistemas');
console.log(empleado1);

console.log(empleado1.nombre)
// se puede acceder a los metodos de la clase padre
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());




