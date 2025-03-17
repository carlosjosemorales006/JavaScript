  'use strict'
  
  let resultado = '';
// throw es una palabra reservada que permite lanzar un error
// funciona en conjunto con try, catch y finally

  try{
    x = 10;
    if(isNaN(resultado)) throw "No es un número";
    else if(resultado === "") throw "Es una cadena vacía";
    else if(resultado >= 0) throw "Es un número positivo";
    else if(resultado < 0) throw "Es un número negativo";
    else throw "\nNo es un número";


  }catch(e)
    {
        console.log(e);
        console.log(e.name);
        console.log(e.message);
    }
    finally{
        console.log("Termina la revisión de errores");
    }