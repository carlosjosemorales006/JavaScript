class Persona {
    // Atributos estaticos
// se usa la palabra reservada static para crear atributos estaticos
static contadorObjetosPersona = 0;
static get MAX_OBJ(){
    return 5;
}

email = 'Valor default email'; // atributo de nuestros objetos

constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido
    // se incrementa el contador de objetos persona
    // no se usa this para acceder al atributo estatico
    // se accede al atributo estatico desde la clase
   
    if (Persona.contadorObjetosPersona < Persona.MAX_OBJ){
        
        this.idPersona = ++Persona.contadorObjetosPersona;

    } else {
        console.log('Se han superado el maximo de objetos permitidos');
    }
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

    return ` ${this.idPersona} ${this._nombre} ${this._apellido}`;
}

toString(){
    // se aplica polimorfismo
    // se llama al metodo nombreCompleto de la clase padre
    return this.nombreCompleto();
}

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto(){
        return `${super.nombreCompleto()} ${this._departamento}`;
    }
}   


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.toString());

let empleado2 = new Empleado('Luis', 'Caballero', 'Contabilidad');
console.log(empleado2.toString());

let empleado3 = new Empleado('Laura', 'Quintero', 'Sistemas');
console.log(empleado3.toString());

let empleado4 = new Empleado('Karla', 'Ramirez', 'Sistemas');
console.log(empleado4.toString());

let empleado5 = new Empleado('Miguel', 'Torres', 'Sistemas');
console.log(empleado5.toString());


console.log(Persona.contadorObjetosPersona);


console.log(Persona.MAX_OBJ);