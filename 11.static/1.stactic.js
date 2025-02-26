class Persona {
        // Atributos estaticos
    // se usa la palabra reservada static para crear atributos estaticos
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido
        // se incrementa el contador de objetos persona
        // no se usa this para acceder al atributo estatico
        // se accede al atributo estatico desde la clase
        Persona.contadorObjetosPersona++;
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

    // el metodo static no se puede acceder desde un objeto
    // se accede desde la clase
    // se usa la palabra reservada static
    // se usa para crear metodos que no dependen de los atributos de la clase
    // se usa para crear metodos que no dependen de los objetos
    static saludar(){
        console.log('Saludos desde el metodo static saludar');
    }

    static saludar2(persona){
        console.log(persona.nombre);
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


//persona1.saludar(); no es posible acceder al metodo static desde un objeto
// se accede al metodo static desde la clase
Persona.saludar();
// se puede pasar un objeto como parametro
Persona.saludar2(persona1);

// se puede acceder al metodo static desde la clase hija
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);
