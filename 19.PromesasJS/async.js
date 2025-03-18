

let promesa = new Promise(resolver => {
    //console.log("Inicio de la promesa");
    setTimeout(() =>{
        resolver("La promesa se ha cumplido después de 3 segundos")},3000);
    //console.log("Fin de la promesa");
});

//promesa.then(valor => {console.log(valor)});

// async indica que una funciona devuelve una promesa
// async convirte una funcion normal en una funcion asincrona


async function miFuncionConPromesa(){
    return'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => {console.log(valor)});

// async con await

async function miFuncionConAwait(){

    let miPromesa = new Promise(resolver =>{
        resolver("saludos con promesa y await");
    });

    console.log(await miPromesa);
}

//miFuncionConAwait();

// promesas, async , await y setTimeout

async function miFuncionConAwaitYSetTimeout(){
    console.log("Inicio de la funcion con await y setTimeout");
    let miPpromesa2 = new Promise(resolver => {
        setTimeout(()=> resolver('saludos con promesa, await y setTimeout'), 3000);
       
    })
    console.log(await miPpromesa2);
    console.log("Fin de la funcion con await y setTimeout");
}

miFuncionConAwaitYSetTimeout();