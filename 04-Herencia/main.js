// clase 04: herencia de objetos en ecmasript 6

/* class Animal {
    constructor(nombre, peso){
        this.nombre = nombre;
        this.peso = peso;
        console.log('se creo el objeto Animal');
    }

    comer(){
        return 'el animal esta comiendo';
    }
}

// extends palabra reservada
class Perro extends Animal {
    constructor(color, raza, nombre, peso) {
        super(nombre, peso);
        this.color = color;
        this.raza = raza;
        console.log('se creo el objeto Perro');
    }

    ladrar(){
        return 'Waw';
    }
}

// creando un perro
const pug = new Perro('Blanco', 'PUG', 'Firulais', '8 kg');

console.log(pug.ladrar());
console.log(pug.comer());

// creando un gato
class Gato extends Animal {
    constructor(color, pelaje, nombre, peso){
        super(nombre, peso);
        this.color = color;
        this.pelaje = pelaje;
    }

    maullar(){
        return 'Miiiaauuu';
    }
}

const gato = new Gato('Gris', 'Corto', 'Logan', '2 KG');
console.log(gato.comer());
console.log(gato.maullar());
 */
// principio de sustitucion de Liskov
// parte del acronimo SOLID

class Largometraje {
    constructor(tiempo, titulo){
        this.tiempo = tiempo;
        this.titulo = titulo;
    }

    // principio abierto cerrado
    // parte de solid
    getTiempo(){
        return this.tiempo;
    }

    getTitulo(){
        return this.titulo;
    }
}

class Pelicula extends Largometraje {
    constructor(tiempo, titulo, genero){
        super(tiempo, titulo);
        this.genero = genero;
    }
}

class Documental extends Largometraje {
    constructor(tiempo, titulo, clasificacion){
        super(tiempo, titulo);
        this.clasificacion = clasificacion;
    }

    getClasificacion(){
        return this.clasificacion;
    }
}

class SalaCine {
    // este objeto recibe la clase 'abstracta'
    constructor(sala, largometraje){
        this.sala = sala;
        this.largometraje = largometraje;
    }

    reproducir(){
        // interpolacion de cadenas, no mames que loco
        return `Reproduciendo...  ${this.largometraje.getTitulo()}`
    }
}

const animalesSalvajes = new Documental("30 min", "Animales Salvajes", "Salvajes");
const matrix = new Pelicula('120 min', 'Matrix', 'Ficcion');

const salaCine = new SalaCine('iMax', matrix);
console.log(salaCine.reproducir());