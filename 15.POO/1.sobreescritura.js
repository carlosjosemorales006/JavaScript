// Sobreescritura de metodos

class Empleados{

    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;

    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleados{

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
// Sobreescritura de metodos

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this.departamento}`;
    }
}

let empleado1 = new Empleados('Juan', 2000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Juan', 3000, 'Sistemas');
console.log(gerente1.obtenerDetalles());