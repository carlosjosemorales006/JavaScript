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

// funcion polimorfica (puede recibir cualquier tipo de objeto)
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    // instanceof: para saber si un objeto es de un tipo en particular
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else{
        console.log('Es un objeto de tipo Empleado');
    }
}


let empleado1 = new Empleados('Juan', 2000);
let gerente1 = new Gerente('Juan', 3000, 'Sistemas');

imprimir(empleado1);
imprimir(gerente1);