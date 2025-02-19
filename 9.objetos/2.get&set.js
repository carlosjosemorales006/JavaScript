let persona = {
    // atributos del objeto
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'carlosjose006@mail.com',
    edad: 32,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    // Para modificar un valor de un atributo
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    // metodos del objeto
    // metodos get  que me permite obtener un valor desde adentro del objeto
    get nombreCompleto(){
        return `${this.nombre}  ${this.apellido}`;
    }
}

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

