
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

// Uso de Apply para llamar a un metodo de un objeto, en otro objeto en que no existe
console.log(persona1.nombreCompleto('Ing.', '8095504510') );
// aqui se utiliza la funcion apply para llamar al metodo nombreCompleto de persona1, pero se le pasa el objeto persona2 como contexto      
// y se le pasan los argumentos que recibe el metodo nombreCompleto
let miArreglo= ['Ing.', '8095504510'];
console.log(persona1.nombreCompleto.apply(persona2, miArreglo) );
// el metodo apply es igual al metodo call, pero se le pasan los argumentos en un arreglo
// el metodo call se le pasan los argumentos separados por comas
// el metodo apply se le pasan los argumentos en un arreglo