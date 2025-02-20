
let persona1 ={

    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function(titulo, tel){
        return `${titulo} ${this.nombre} ${this.apellido}  ${tel}`;
    },
    
}

let persona2 = {

    nombre : 'Carlos',
    apellido : 'Lara'
    
    
}

// Uso de Call para llamar a un metodo de un objeto, en otro objeto en que no existe
console.log(persona1.nombreCompleto('Lic.','8095504510') );
// aqui se utiliza la funcion call para llamar al metodo nombreCompleto de persona1, pero se le pasa el objeto persona2 como contexto
// y se le pasan los argumentos que recibe el metodo nombreCompleto
console.log(persona1.nombreCompleto.call(persona2, 'Ing.', '8095504510') );