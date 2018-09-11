// ejercicios de herencia y objetos
// 1.- Crear un objeto de tipo Figura que herede de tipo triangulo y rectangulo y que compartan caracteristicas.
class Figura{
    constructor(base, altura, numeroLados){
        this.base = base;
        this.altura= altura;
        this.numeroLados = numeroLados;
    }
}

class Triangulo extends Figura{
    constructor(base, altura, numeroLados, color){
        super(base, altura, numeroLados);
        this.color= color;
    }
}

class Rectangulo extends Figura{
    constructor(base, altura, numeroLados, textura){
        super(base, altura, numeroLados);
        this.textura = textura;
    }
} 

/* 2.- Crear la clase construcción que hereda a otras dos clases “casa” y “edificio”
Sus atributos son: num puertas,num ventanas ,  num piso, direccion, altura,largo y ancho del tereno
Cada uno tiene un metodo que regresa los metros cuadrados 
Un metodo que regrese su direccion 
Un metodo que permita modificar su direccion */
console.log("Ejercicio 2");
class Construccion {
    constructor(numPuertas, NumVentanas, numPisos, direccion, altura, largo, ancho){
        this.altura = altura;
        this.ancho = ancho;
        this.numPisos = numPisos;
        this.numPuertas = numPuertas;
        this.NumVentanas = NumVentanas;
        this.largo = largo,
        this.direccion = direccion;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    calculaArea(){
        return this.ancho * this.largo;
    }
}

class Casa extends Construccion{
    constructor(numPuertas, NumVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, NumVentanas, numPisos, direccion, altura, largo, ancho);
    }
}

class Edificio extends Construccion{
    constructor(numPuertas, NumVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, NumVentanas, numPisos, direccion, altura, largo, ancho);
    }
}

const miCasa = new Casa(2, 3, 2, 'siempre viva 100', 40, 80, 80);

console.log(miCasa.getDireccion());

miCasa.setDireccion('articulo 27 325');

console.log(miCasa.getDireccion());


/* 3.- Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
Titular y cantidad
ingresar(cantidad)
retirar(cantidad)
Hacer las validaciones previas
Como regla de negocio no debe de tener más de $900 y menos de $10 */
console.log("Ejercicio 3");
class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad){
        if(this.saldo + cantidad > 900){
            return `Saldo excedido. saldo actual: ${this.saldo}; saldo + ingreso: ${this.saldo + cantidad}`;
        }else{
            this.saldo += cantidad;
            return `Ingreso por ${cantidad} correcto. Saldo: ${this.saldo}`;
        }
    }

    retirar(cantidad){
        if(this.saldo - cantidad <= 10){
            return `Saldo insuficiente. saldo actual: ${this.saldo}; saldo - retiro: ${this.saldo - cantidad}`;
        }else{
            this.saldo -= cantidad;
            return `Retiro por ${cantidad}. Saldo: ${this.saldo}`;
        }
    }
}

const miCuenta = new Cuenta('Vanesa Cid', 300);
console.log(miCuenta.ingresar(900));
console.log(miCuenta.ingresar(300));

console.log(miCuenta.retirar(900));
console.log(miCuenta.ingresar(300));

/* 4.- Crearemos una supeclase llamada Electrodomestico con las siguientes características:
Sus atributos son precio, color, consumo energético y peso.
El constructor debe de pedir precio, color y peso.
Crearemos una subclase llamada Lavadora con las siguientes características:
Su atributo es carga(kg de ropa), ademas de los atributos heredados.
Crear el metodo precioFinal() (El precio de el consumo energético por la carga) */
console.log("Ejercicio 4");

class Electrodomestico{
    constructor(precio, color, peso){
        this.precio = precio;
        this.color = color;
        this.peso = peso;
    }

    setConsumoEnergetico(consumo){
        this.consumo = consumo;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, peso, cargaRopa){
        super(precio, color, peso);
        this.cargaRopa = cargaRopa;
    }

    precioFinal(){
        return this.consumo * this.cargaRopa;
    }
}

const lavadoraMabe = new Lavadora(3500, 'blanco', '25 KG', 13);
lavadoraMabe.setConsumoEnergetico(0.14);
console.log(`el precio final del consumo de la lavadora es de:  ${lavadoraMabe.precioFinal()}`);