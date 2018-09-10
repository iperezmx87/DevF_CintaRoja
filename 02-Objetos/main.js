// clase anterior
// variables
// tipos de datos
// estructuras de control 
// funciones
// forma anterior
/* function miFuncion(){
    console.log("Soy un función");
}

// nueva forma
let miFuncionNuevo = () => {
    // console.log("Soy una nueva funcion (arrow)"); // escupe un undefined
    return "Soy una nueva funcion (arrow)"; // no escupe undefined
 }


console.log(miFuncionNuevo); // asi imprime el contenido de la funcion :O
console.log(miFuncionNuevo()); // ejecuta el codigo

let resta = (num1, num2) => {
    return num1 - num2;
}
console.log(resta(6, 3));

let multiplicar = (numero) => {
    return numero * numero;
}

console.log(multiplicar(10)); */

// ambitos (alcance) de las variables, global y funcion

// otros tipos de datos complejos

// arreglos
// arreglo es un objeto
/* let arreglo = [];

//console.log(arreglo);
//console.log(typeof(arreglo));

// se puede redefinir
arreglo = [
    "manzana",
    "pera",
    "piña"
];

console.log(arreglo[2]);

// como llenar un arreglo con un for
let numeros = [];

for(let indice = 0; indice < 3; indice++){
    numeros.push(indice);
}

console.log(numeros);



 let directores = [
     "Stanley Kubrick",
     "Quentin Tarantino",
     "Guillermo del Toro",
     "Miyasaki",
     "Alfonso Cuaron"
 ];
 */
 // imprimir un arreglo con for
 //console.log(directores.length);
/* for(let indice = 0; indice<directores.length; indice++){
    console.log(directores[indice]);
} */

/* // imprimir arreglo al reves
for(let indice = (directores.length -1); indice >= 0; indice--){
    console.log(indice);
    console.log(directores[indice]);
} */

// ejercicios

// 1.- Hacer una función que convierta de grados
//   centígrados a Farenheit

console.log("1.- Hacer una funcion que convierta de grados centigrados a Farenheit")
let numGrados = 25;
console.log("Grados centigrados: " + numGrados);

let funcConvertir =  (numGrados) => {
    let gradosFar = (numGrados * 1.8) + 32;

    return gradosFar;
}

console.log("Grados FAHRENHEIT: " + funcConvertir(numGrados));

//2. - Hacer una funcion que muestre la tabla de multiplicar de un número
console.log("2. - Hacer una funcion que muestre la tabla de multiplicar de un numero");

let tablaDel = 3;

let muestraTabla = (tablaDel) => {
     // tablaDel x 0 = tabladel * 0;
     console.log("Tabla de multiplicar del " + tablaDel);
     for(indice = 0; indice < 11; indice ++){
         console.log(tablaDel + " X " + indice + " = " + (tablaDel * indice));
     }

     return null;
}

console.log(muestraTabla(tablaDel));

// 3.- Leer un arreglo de enteros y sacar su promedio
let arregloNumeros = [
    20,
    35,
    12,
    32,
    76,
    21
];

console.log("3.- Leer un arreglo de enteros y sacar su promedio");
console.log(arregloNumeros);

let promediaNumeros = (arregloNumeros) => {
    let promedio = 0;
    let sumaNumeros = 0;

    for (var indice = 0; indice < arregloNumeros.length; indice++){
        sumaNumeros += arregloNumeros[indice]; 
    }

    promedio = sumaNumeros / arregloNumeros.length;

    return promedio;
}

console.log("El promedio del arreglo es: " + promediaNumeros(arregloNumeros));

//5. - Funcion que pida N parametros y devuelva cuantos parametros se le pasaron
console.log("5.- Funcion que pida N parametros y devuelva cuantos parametros se le pasaron");
let cuentaParams = (...params) => {
    // este ejercicio es para demostrar los var params    
    return "El numero de parametros recibidos es de: " +  params.length;
}

console.log(cuentaParams(0, "abd", false, []));

//6. - Guardar en un array los 20 primeros números pares
console.log("6. - Guardar en un array los 20 primeros numeros pares");

let cuantosPares = 20;

let guardarNumerosPares = (cuantosPares) => {
    var arregloNumerosPares = [];
    
    // este contador ira incrementando cuando encontremos un par
    let contadorPares = 0;

    let indice = 0;

    while(contadorPares < cuantosPares){
        if(indice % 2 == 0){
            // numero par
            arregloNumerosPares.push(indice);
            contadorPares ++;
        }

        indice++;
    }

    return arregloNumerosPares;
}

console.log(" primeros "+ cuantosPares + " numeros pares");
console.log(guardarNumerosPares(cuantosPares));

/* 7. - Hacer una funcion que calcule el tiempo
     necesario para que un automóvil que se
     mueve con una velocidad de 73000 m / h
     recorra una distancia de 120 km.
         (TIEMPO = d / v) */

         let velocidad = 73000; // se mide en m / h
         let distancia = 120; // se pide en km para convertir en m
         
         let calculaTiempo = (velocidad, distancia) => {
             return (distancia * 1000) / velocidad; // tiempo en horas ??
         }
         
         console.log("El tiempo necesario para recorrer: " + distancia + " KM con una velidad de: " + velocidad + " m/h, es de: " + calculaTiempo(velocidad, distancia) + " Horas.");

/*      8. - Crear una funcion que reciba como
        parametro una oración y defina si
        es palindromo
*/
console.log("8.- Crear una funcion que reciba como parametro una oracion y defina si es palindromo");
let oracion = "anita lava la tina";

let calculaPalindromo= (oracion) => {
    // quitar espacios en blanco :D

    oracion = oracion.replace(/\s/g, '');

    console.log(oracion);

    let oracionInvertida = "";

    for(let indice = oracion.length -1; indice >= 0; indice--){
        oracionInvertida += oracion[indice];
    }

    console.log("Oracion original: " + oracion);
    console.log("Oracion invertida: " + oracionInvertida);

    if(oracionInvertida == oracion){
        console.log("La oracion es un palindromo");
    }else{
        console.log("La oracion no es palidromo");
    }
}

console.log(calculaPalindromo(oracion));

//9 extra Hacer los primeros N dígitos de la serie Fibbonacci
console.log("9 extra.- Hacer los primeros N digitos de la serie Fibbonacci");

let numeroSerie = 20;

let calculaSerieFibonacci = (numeroSerie) => {
    let serieFibonacci = [numeroSerie];

    let contadorNumeros = 0;

    // series iniciales
    if(numeroSerie == 0){
        serieFibonacci[0] = 0;
    }
    else if(numeroSerie == 1){
        serieFibonacci[0] = 0;
    }else if (numeroSerie == 2){
        serieFibonacci[0] = 0;
        serieFibonacci[1] = 1;
    }else if(numeroSerie == 3){
        serieFibonacci[0] = 0;
        serieFibonacci[1] = 1;
        serieFibonacci[2] = 1;
    }else{
        serieFibonacci[0] = 0;
        serieFibonacci[1] = 1;
        serieFibonacci[2] = 1;

        contadorNumeros = 3;

        // iteracion
        while(contadorNumeros < numeroSerie){
            serieFibonacci[contadorNumeros] = serieFibonacci[contadorNumeros -1] + serieFibonacci[contadorNumeros - 2];
            contadorNumeros++;
        }
    }

    return serieFibonacci;
}

console.log("La serie resultante es: ");
console.log(calculaSerieFibonacci(numeroSerie));

// objetos
let miObjeto = {
    numero: 13,
    buleano: true,
    arreglo:[
        2,
        false,
        texto = "texto2"
    ],
    texto:"texo 1"
};

console.log(miObjeto);

// ejercicio de objetos
//CREAR TRES OBJETOS:
/* 
1) CUADRADO
2) TRIANGULO
3) RECTANGULO
LOS TRES OBJETOS TENGAN LOS ATRIBUTOS BASE Y ALTURA
TAMBIEN DEBEN TENER COMO ATRIBUTO UNA FUNCION LLAMADA "CALCULAR AREA" */
let cuadrado = {
    base: 3,
    calcularArea:function(){
        return base * base;
    }
};

let triangulo = {
    base: 4,
    altura: 5,
    calcularArea:function(){
        return (base * altura) / 2;
    }
};

let rectangulo = {
    base: 5,
    altura:7,
    calcularArea:function(){
        return base * altura;
    }   
};

console.log("El area del cuadrado es: " + new cuadrado().calcularArea());
console.log("El area del trinagulo es: " + new triangulo().calcularArea());
console.log("El area del rectangulo es: " + new rectangulo().calcularArea());
