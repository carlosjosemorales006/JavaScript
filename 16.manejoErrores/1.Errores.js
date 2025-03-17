"use strict";

// Manejo de errores en JavaScript

try{
x = 10;
miFuncion();
throw "Mi error personalizado";
}catch(error){

    console.log(error);
    console.log("Ha ocurrido un error");
}// finallly es opcional
finally{
    console.log("Termina la revisión de errores");
}
console.log("Continuamos...");