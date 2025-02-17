

// Funciones recursivas en Js

// Imprimir 3, 2, 1

numero = 3;

function funcionRecursiva(numero){

    if (numero == 1){
        // caso base
        console.log(numero);
    }
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

// Llamamos a la función recursiva  
funcionRecursiva(numero); 