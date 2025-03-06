
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