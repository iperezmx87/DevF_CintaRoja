//Clase 01
//variables
/* var miVariable = "Hola";

console.log("Estoy en la consola");
console.log(miVariable); */

// esta linea envia error
//console.log(miVariable2);

//ECMA recomienda declarar variables asi
/* let miVariable2 = "ECMA";
console.log(miVariable2); */

// tipos de datos
/* let numero = 10;
let booleano = true;
let cadena = "texto"; */

//console.log(booleano);
//console.log(typeof(booleano));

// estructuras de control
/* let edad = 18;

// condicional if else
if(edad >= 18){
    console.log("Eres mayor");
}
else if(edad < 18){
    console.log("Eres menor");
}else{
    // otros casos
} */

// ciclos for
/* for(let i=0; i<=10; i++){
    console.log(i);
} */

// imprimir numeros pares hasta 25
/* for(let i = 0; i<=25; i++){
    if(i % 2 == 0) // operador modulo; comparación de valores con doble igual
    {
        console.log(i, "es par");
    }
} */

// ejercicio
/* A partir de una variable que contenga una cadena de texto, se debe mostrar mediante un console.log esa misma cadena pero alternando cada caracter de la cadena entre minúsculas y mayúsculas.

Ejemplo:
let = "perritosalchicha"

El resultado debe mostrarse así:
console.log -> pErRiToSaLcHiChA */

// una cadena de texto es un arreglo de caracteres :D

/* let palabra = "hola vane como estas hoy??";
let nuevaPalabra = "";

for(var indice = 0; indice < palabra.length; indice++){
    // divide y venceras :D
    let letra = palabra[indice];

    // comparar las letras
    if(indice % 2 == 0){
        // si la letra es mayuscula
       // hazla minuscula
        letra = letra.toLowerCase();
    }else{
        // si es minuscula, hacerla mayuscula
        letra = letra.toUpperCase();
    }

    // genero la nueva palabra con las letras
    nuevaPalabra += letra;
}

console.log("Palabra original: " + palabra);
console.log("Nueva plabra: " + nuevaPalabra); */

// funciones
// codigo que se escribe una vez y se usa varias veces
/* function saludar(){
    console.log("Hola Batch 23 !!");
}

saludar();

function saludar2(){
    return "Hola batch 23 !! saludar 2";
}

console.log(saludar2());
 */
/* let resultado = saludar2();
console.log(resultado); */

/* function suma(num1, num2){
    return num1 + num2;
} */

//console.log(suma(2, 5));

function ejercicio(palabra){
    let nuevaPalabra = "";

    for(var indice = 0; indice < palabra.length; indice++){
        // divide y venceras :D
        let letra = palabra[indice];

        // comparar las letras
        if(indice % 2 == 0){
            // si la letra es mayuscula
            // hazla minuscula
            letra = letra.toLowerCase();
        }else{
            // si es minuscula, hacerla mayuscula
            letra = letra.toUpperCase();
        }
        
        // genero la nueva palabra con las letras
        nuevaPalabra += letra;
    }

    return nuevaPalabra;
}

let palabra = "hola vane como estas??";
console.log(palabra, ejercicio(palabra));