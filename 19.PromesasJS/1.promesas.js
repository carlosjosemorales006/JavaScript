// En este archivo se explica el funcionamiento de las promesas en JavaScript
// Las promesas son objetos que representan la eventual finalización (o falla) de una operación asíncrona
     

let miPromesa = new Promise( (resolver,rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("La promesa se ha cumplido");
    }
    else{
        rechazar("La promesa no se ha cumplido");
    }
});

 miPromesa.then( (valor) =>{console.log(valor)}).catch((error) => {console.log(error)});

