
// Alcance de una variable en JS

let variableGlobal = "Soy una variable global";

variableGlobal = "Soy una variable global modificada";

// definir funcion

function funcion(variableLocal) {    

    console.log(variableLocal); // Acceso a variable global
   
    variableGlobal = "Soy una variable Glova funcion";
}


funcion(variableGlobal);