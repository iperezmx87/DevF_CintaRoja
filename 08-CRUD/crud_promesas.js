// ejercicios de crud con promesas encadenadas
const request = require('request');

const URL_BASE = "http://goodreads-devf-aaron.herokuapp.com/api/v1/";

// nuevo objeto con post

function createAuthor(name, last_name, nacionalidad, biography, gender, age){
    let uri = "authors/";

    const newAuthor = {
        "name":name,
        "last_name":last_name,
        "nacionalidad":nacionalidad,
        "biography":biography,
        "gender":gender,
        "age":age
    };

    return new Promise((resolve, reject) => {
        request.post({url: `${URL_BASE}${uri}`, form:newAuthor}, (error, response, body) => {
            response.statusCode === 201
            ? resolve(JSON.parse(body))
            : reject(`Error al ejecutar la peticion post ${error}`);
        });
    });
}

function updateAuthor(idAuthor, name, last_name, nacionalidad, biography, gender, age){
    let uri = `authors/${idAuthor}/`;

    const authorUpdate = {
        "name":name,
        "last_name":last_name,
        "nacionalidad":nacionalidad,
        "biography":biography,
        "gender":gender,
        "age":age
    };

    return new Promise((resolve, reject) => {
        request.put({url: `${URL_BASE}${uri}`, form:authorUpdate}, (error, response, body) => {
            response.statusCode === 200
            ? resolve(JSON.parse(body))
            : reject(`Error al ejecutar la peticion put ${error}`);
        });
    });    
};

function deleteAutor(id){
    let uri = `authors/${id}/`;

    return new Promise((resolve, reject) => {
        request.delete(`${URL_BASE}${uri}`, (error, response, body) => {
            response.statusCode === 204
            ? resolve('Autor eliminado correctamente')
            : reject(`Error al ejecutar la peticion delete ${error}`);
        });
    });
}

// la magia de encadenar promesas 
const crearAutorPromesa = createAuthor("Vanesa", "Cid Gar", "MX", "Muchacha buena onda", "M", "26");

// ejecutar las promesas
crearAutorPromesa
.then((autorNuevo) => {
    console.log(autorNuevo);
    return updateAuthor(autorNuevo.id, "Vaneeee", "Garcia", "MX", "Muchacha buena onda jejeje", "M", "26");
})
// la magia :) al fin la entiendo
.then((respuestaUpdate) => {
    console.log("Author actualizado");
    console.log(respuestaUpdate);
    return deleteAutor(respuestaUpdate.id);
})

// y mas y mas y mas :D
.then((respuestaDelete) => {
    console.log(respuestaDelete);
})
// solo un catch
.catch((error) => console.log(error));