//1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
const request = require('request');

//http://pokeapi.co/api/v2/pokemon/30

/* request.get("http://pokeapi.co/api/v2/pokemon/3", (error, response, body)=>{
    if(response.statusCode === 200){
        let jsonObj = JSON.parse(body);
        console.log("Nombre del pokemon: " + jsonObj.name);
        console.log("Tipos de pokemon encontrado: ", jsonObj.types);
        jsonObj.types.map((element)=>{
            console.log("obteniendo tipo de pokemon con la url: " + element.type.url);
            request.get(element.type.url, (error, response, body)=>{
                if(response.statusCode === 200){
                    let pokemonTypeObj = JSON.parse(body);
                    console.log("nombre del tipo pokemon: " + pokemonTypeObj.name);
                    console.log("Generacion del tipo de pokemon: " + pokemonTypeObj.generation.name);
                }else{
                    console.log("Tipo de pokemon no encontrado...");
                }
            });
        });
    }else{
        console.log("Pokemon no encontrado...");
    }
}); */
/* 
1- peticionLibro(“i robot”);http://openlibrary.org/search.json?q=i+robot) buscar un libro y traer el o los autores del primer libro */
/* console.log("ejercicio 1 de query params.");

let busqueda = "el hombre en busca del sentido";
function getBooks(query){
    query = query.replace(' ', "+");
    //console.log(query);
    request.get(`http://openlibrary.org/search.json?q=${query}`, (error, response, body) => {
        if(response.statusCode === 200){
            // docs es el libro
            let bodyObj = JSON.parse(body);
            let book = bodyObj.docs[3];
            book.author_name.map((element) => {
                console.log("author: " + element);
            });
        }else{
            console.log("Datos no encontrados");
        }
    });
}

getBooks(busqueda); */

/* 2- Hacer una petición por autor y devolver la lista de sus libros (http://openlibrary.org/search.json?author=asimov) */
/* console.log("ejercicio 2");
let author = "alejandro jodorowsky";

function busquedaPorAutor(author){
    let author2 = author.replace(' ', '+');
    request.get(`http://openlibrary.org/search.json?author=${author2}`, (error, response, body) => {
        if(response.statusCode === 200){
            // docs es el libro
            let bodyObj = JSON.parse(body);
            console.log("libros encontrados del autor: " + author);
            bodyObj.docs.map((book) => {
                console.log("titulo: " + book.title);
            });
        }else{
            console.log("Datos no encontrados");
        }
    });
}

busquedaPorAutor(author); */

