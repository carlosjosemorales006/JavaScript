
class Persona {
    static contadorPersona = 0;

  constructor(idPersona,nombre,apellido , edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = Persona.idPersona;
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


