
let reloj = () =>{
    let fecha = new Date();
    console.log(`La hora es: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);
// // setTimeout(miFuncionCallback, 13000);
// // setTimeout es una funcion que permite ejecutar una funcion después de un tiempo determinado
// // en milisegundos
// // en este caso, se ejecuta la funcion miFuncionCallback después de 13 segundos
// // la funcion setTimeout recibe como argumento la funcion a ejecutar y el tiempo en milisegundos