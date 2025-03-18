


let promesa = new Promise(resolver => {
    console.log("Inicio de la promesa");
    setTimeout(() =>{
        resolver("La promesa se ha cumplido después de 3 segundos")},3000);
    console.log("Fin de la promesa");
});

promesa.then(valor => {console.log(valor)});