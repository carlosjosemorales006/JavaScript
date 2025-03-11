class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

}


class Raton extends DispositivoEntrada{
    static contadorRatonnes = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.idRaton = ++Raton.contadorRatonnes;


    }
    toString(){
        return `Raton:[idRaton: ${this.idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    toString(){

        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }



}

let teclado1 = new Teclado('USB','HP');
let teclado2 = new Teclado('Bluetooth','Dell');
console.log(teclado1.toString());
console.log(teclado2.toString());


class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;

    }

    get marca(){
        return this._marca;
    }

    set marca(marca){

        this._marca = marca;

    }

    get tamaño(){
        return this._tamaño
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }
}

monitor1 = new Monitor('DELL', '512 X 512');
console.log(monitor1.toString());

class Computadora{

    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputador = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton; 
    }
    get idComputador(){
        return this._idComputador;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){

        this._monitor = monitor;
    }

    get teclado(){
        return this.teclado;
    }

    set teclado(teclado){

        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){

        this._raton = raton;
    }

    toString(){
        return `Computadora [idComputador: ${this._idComputador}, Nonmbre: ${this._nombre}, (Monitor: ${this._monitor}), (Teclado: ${this._teclado}), (Raton: ${this._raton})]`;

    }




}

computadora1 = new Computadora('DELL',monitor1,teclado1,raton1);
console.log(computadora1.toString());

computadora2 = new Computadora('Lenovo',monitor1,teclado1,raton1);
console.log(computadora1.toString());


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadores= [];

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadores.push(computadora)
    }

    mostrarOrden(){
        let computadoresOrden = ' ';
        for(let computadora of this._computadores){
            computadoresOrden += `\n${this._computadores}`
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoresOrden}`)
    }


}

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden()

let orden2 = new Orden();

orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2)
orden2.mostrarOrden()


