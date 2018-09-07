// objetos en serio
// clase 3
// la clase es un molde para crear objetos
// se definen las caracteristicas de los objetos
// objeto: la instancia de una clase
/* class Animal{
    // el constructor define los atributos que tendrá el objeto
    constructor(tamano, color, especie, alimentacion){
        this.tamano = tamano;
        this.color = color;
        this.especie = especie;
        this.alimentacion = alimentacion;
    }

    // metodos getter y setter para encapsular los atributos de
    // nuestro objeto

    // gettter
    getTamano (){
        return this.tamano;
    }
    
    getColor(){
        return this.color;
    }

    // completar

    // setters
    setTamano(tamano){
        this.tamano = tamano;
    }

    setColor(color){
        this.color = color;
    }

    // completar

    // comportamiento: metodos
    correr(){
        return "El animal esta corriendo y es de color " + this.color;
    }

    irAlBano(){
        return "El animal de " + this.tamano + " esta en el trono xD";
    }

    saludar(color){
        return "El animal de color " + this.color + " saluda al animal de color " + color;  
    }

    ladrar(perro){
        // recibe un objeto que se llama perror

    }
}

let perritoChihuahua = new Animal("pequeno", "negro", "chihuahua", "ninios");
console.log(perritoChihuahua);
console.log(perritoChihuahua.getColor());
console.log(perritoChihuahua.correr());

// saludando
let perroSanBernardo = new Animal("Grande", "cafe", "san bernardo", "peces");

console.log(
    perritoChihuahua.saludar(perroSanBernardo.getColor())
); */

/* Ejercicio

Crear una clase Carro con
atributos: color, peso, marca
metodos: arrancar, apagar
arrancar -> El carro Toyota de color azul arranco
apagar -> El carro Toyota se apago

Crear tres instancias de la clase Carro e
imprimir con console.log alguno de sus metodos. */
/* class Carro{
    constructor(color, peso, marca){
        this.color = color;
        this.peso = peso;
        this.marca = marca;
    }

    arrancar(){
        return "El carro " + this.marca + " es de color " + this.color;
    }

    apagar(){
        return "El carro " + this.marca + " se apago";
    }
}

let carro1 = new Carro("rojo", "700 kg", "Ferrari");
let carro2 = new Carro("azul", "600 KG", "McLaren");
let carro3 = new Carro("verder", "1000kg", "Mazda");

console.log(carro1.arrancar());
console.log(carro2.arrancar());
console.log(carro3.arrancar());

console.log(carro1.apagar());
console.log(carro2.apagar());
console.log(carro3.apagar()); */

// ejercicio 2
/* Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad,sexo,peso y altura
    Generar el RFC a partir de el nombre, edad y sexo */
class Persona{
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    // metodos
    //IMC = Peso (kg) / altura (m)2
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    calcularRFC(){
        // primer letra del apellido paterno
        let rfcCalculado = "";
        rfcCalculado += this.apellidoPaterno[0];

        // primer vocal del apellido paterno
        for(let indice = 1; indice<this.apellidoPaterno.length;indice++){
            // si la letra es vocal
            if(this.apellidoPaterno[indice].toUpperCase() == "A" 
            || this.apellidoPaterno[indice].toUpperCase() == "E"
            || this.apellidoPaterno[indice].toUpperCase() == "I"
            || this.apellidoPaterno[indice].toUpperCase() == "O"
            || this.apellidoPaterno[indice].toUpperCase() == "U"){
                rfcCalculado += this.apellidoPaterno[indice].toUpperCase();
                break;
            }
        }

        // primer letra del apellido paterno
        rfcCalculado += this.apellidoMaterno[0];

        // primer letra del nombre
        rfcCalculado += this.nombre[0];

        // fecha de nacimiento dos año, dos mes y dos dia
        // solo tenemos la edad...
        // por lo que tomamos hoy como dia y mes de nacimiento
        // se calcula el año de nacimiento
        let fechaHoy = new Date();

        rfcCalculado += (fechaHoy.getFullYear() - this.edad).toString()[2];
        rfcCalculado += (fechaHoy.getFullYear() - this.edad).toString()[3];
        
        let mesNacimiento = fechaHoy.getMonth();
        if(mesNacimiento < 10){
            rfcCalculado += "0" + mesNacimiento;
        }else{
            rfcCalculado += mesNacimiento;
        }

        let diaNacimiento = fechaHoy.getDay();
        if(diaNacimiento < 10){
            rfcCalculado += "0" + diaNacimiento;
        }else{
            rfcCalculado += diaNacimiento;
        }

       // rfcCalculado += this.sexo;

        return rfcCalculado;
    }

    validarMayorEdad(){
        if(this.edad >= 18){
            return this.nombreCompleto() + " es mayor de edad";
        }else{
            return this.nombreCompleto() + " es menor de edad";
        }
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    }
}

let vane = new Persona("Vanesa", "Cid", "Garcia", 26, "M", 65, 1.69);

console.log(vane.nombreCompleto() + " tiene el Indice de masa corporal de: " + vane.calcularIMC());
console.log("El RFC de " + vane.nombreCompleto() + " es: " + vane.calcularRFC());
console.log(vane.validarMayorEdad());