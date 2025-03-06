
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre, edad, fechaRegistro) {
        super(nombre, edad);
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