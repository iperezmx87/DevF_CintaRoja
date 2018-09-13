/* 1.- Escribe una funcion que tome una cadena de palabras en mayusculas y la regrese en minusculas.
Entrada: [“HOLA”,”COMO”,”ESTAS”]        
Salida: [“hola”,”como”,”estas”] */
/* console.log("Ejercicio 1");
let entrada = ["HOLA","VANE","JEJEJE"];

let entradaMinus = entrada.map((elemento) => elemento.toUpperCase().toLowerCase());

console.log("entrada: ", entrada);
console.log("entrada minusculas: ", entradaMinus); */

console.log("Ejercicio 3");
let lista = [1, 3, 5, 7, 9];
console.log("lista normal: ", lista);

lista = lista.map((elemento) => elemento * 7);

let listaFiltrada = lista.filter((elemento) => elemento < 30);
console.log("lista modificada: ", lista);
console.log("lista filtrada: ", listaFiltrada);

/* 2.- Crea una funcion que reciba como parametro una cadena de palabras 
    y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
        Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
        Salida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”] */
/* console.log("Ejercicio 2");
let listaOraciones = ["hola mundo javascript", "cinta roja", "Cada palabra debe ser asi", "UHUUUU"];
let listaOracionesMod = listaOraciones.map((oracion) => {
    // separar cada oracion en palabras y ver que el indice de la palabra sea par
    let palabrasOracion = oracion.split(" ");

    // procesar la palabra
    let plb = "";
   
    palabrasOracion.map((palabra, indice) => {
        plb += indice % 2 == 0 ? palabra.toUpperCase() : palabra.toLowerCase();
        plb += " ";
        return plb;
    });

    return plb.trim();
});

console.log("lista original: ", listaOraciones);
console.log("lista modificada: ", listaOracionesMod);

/*  3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], 
y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas) */
/* console.log("Ejercicio 3");
let arregloTiempo = [240, 80, 200, 100];

let tiemposMayores = arregloTiempo.filter((elemento)=> (elemento / 60) > 2);
console.log("tiempos normal: ", arregloTiempo);
console.log("tiempos filtrado: ", tiemposMayores);

//4.- A partir de esta lista [1, 3, 5, 7, 9], 
//multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30
*/