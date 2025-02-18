// creacion de un objeto mas comun con objetos directamente
let persona = {
    // atributos del objeto
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'carlosjose006@mail.com',
    edad: 32,
    // metodos del objeto
    nombreCompleto: function(){
        return `${this.nombre}  ${this.apellido}`;
    }
}

console.log(persona.nombreCompleto());
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
//----------------------------------------------------------------------------------------------------------------------------------
// otra forma menos utilizada para crear un objeto  es con la palabra reservada new
let persona2 = new Object(); // se crea un objeto vacio
// se le asignan propiedades al objeto
persona2.nombre = 'Carlos';
persona2.apellido = 'Morales';
persona2.direccion = 'Calle 123';
persona2.telefono = '123456789';
// se le asigna un metodo al objeto
persona2.nombreCompleto = function(){
    return `${this.nombre}  ${this.apellido}`;
}

console.log(persona2.nombreCompleto());

// otra forma de acceder a los atributos de un objeto
console.log(persona.nombre)
console.log(persona["nombre"])

// recorrer un objeto con for in

for ( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
        
    
}