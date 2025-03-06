
class Persona {
    static contadorPersona = 0;

  constructor(nombre,apellido , edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersona;
  }

  get IdPersona() {
    return this.idPersona;
  }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }


    get edad() {
        return this._edad;
    }

    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}



class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre,apellido, edad, sueldo) {
        super(nombre,apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${this._idEmpleado} ${super.toString()} ${this._sueldo}`;
    }
}



class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre,apellido, edad, fechaRegistro) {
        super(nombre,apellido, edad);
        this._idcliente = ++Cliente.contadorCliente
        this._fechaRegistro = fechaRegistro;
    }
  
    get idCliente() {
        return this._idcliente;
    }   

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${this._idcliente} ${super.toString()} ${this._fechaRegistro}`;
    }
}


persona1 = new Persona('Juan', 'Perez', 28);    
console.log(persona1.toString());

persona2 = new Persona('Carlos', 'Lara', 30);       
console.log(persona2.toString());

empleado1 = new Empleado('Karla', 'Gomez', 35, 5000);
console.log(empleado1.toString());
empleado2 = new Empleado('Laura', 'Quintero', 25, 3000);
console.log(empleado2.toString());

clieente1 = new Cliente('Carlos','Morales',32, new Date());
console.log(clieente1.toString());
clieente2 = new Cliente('Maria', 25, new Date());
console.log(clieente2.toString());