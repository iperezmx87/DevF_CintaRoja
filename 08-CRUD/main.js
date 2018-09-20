/* // cliente completo de rest
// get post put delete
// crud: acronimo de Create Read Update Delete
const request = require('request');

// get all
let URL_GET = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
request.get(URL_GET, (error, response, body) => {
    //console.log(body);
    let responseData = JSON.parse(body);
    console.log(responseData);
});

// post one
console.log("Creando autor con POST");
let URL_POST = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'; // la misma pero lo que cambia es la func

const jsonSend = {
    "name":"Vane",
    "last_name":"Cid",
    "nacionalidad":"MX",
    "biography":"Programadora rifada :)",
    "gender":"F",
    "age":26
};


request.post({url:URL_POST, form:jsonSend}, (error, response, body) => {
        if(response.statusCode === 201){
            let newAuthor = JSON.parse(body);
            console.log(`Nuevo autor creado: ${newAuthor.id} ${newAuthor.name} ${newAuthor.last_name}`);

            console.log("");
        }else{
            console.log(error);
        }
}); 


console.log("obteniendo nuevo autor por su id con GET");
// get one
let URL_GET = `${URL_POST}1254/`;

    request.get(URL_GET, (err, response, body) => {
        if(response.statusCode === 200){
            let newAuthor = JSON.parse(body);
            console.log(`Autor encontrado: ${newAuthor.id} ${newAuthor.name} ${newAuthor.last_name}`);

            console.log("");
        }else{
            console.log(error);
        }
    });

console.log(`Nombre del autor seleccionado: ${authorRead.name}`);
console.log("Actualizando con PUT");

const jsonSendPut = {
    "name":"Vane",
    "last_name":"Cid Garcia",
    "nacionalidad":"MX",
    "biography":"Programadora rifada :) que tiene problemas con su empresa",
    "gender":"F",
    "age":27,
    "is_alive":true
};

const URL_PUT = `${URL_POST}1254/`;
console.log(URL_PUT);
request.put({url:URL_PUT, form: jsonSendPut}, (err, response, body) => {
    console.log(response.statusCode);
    if(response.statusCode === 200){
        let newAuthor = JSON.parse(body);
        console.log(`Autor actualizado con put: ${newAuthor.id} ${newAuthor.name} ${newAuthor.last_name}`);

        console.log("");
    }else{
        console.log(err);
    }
});


console.log("Actualizando biografia con PATCH");

// patch one
// 200
jsonSendPatch = {
    "biography":"Programadora rifada :) que tiene problemas con su empresa pero supo ponerse al frente"
};

request.patch({url: URL_PUT, form: jsonSendPatch}, (error, response, body) =>{
    return response.statusCode===200
    ? JSON.parse(body)
    : error;
});

console.log("Autor actualizado correctamente");

console.log("");

request.delete(URL_GET, (error, response, body) =>{
    return response.statusCode===200
    ? JSON.parse(body)
    : error;
});

console.log("Autor eliminado correctamente");
console.log(" :( "); */

// ---------------------------------------------------------------------------

const request = require('request');
let URL_API = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";

// cliente crud con promesas
// post one
const jsonSend = {
    "name":"Vanesa",
    "last_name":"Cid",
    "nacionalidad":"MX",
    "biography":"Programadora muy buena onda :)",
    "gender":"F",
    "age":26,
    "id": 1254,
    "is_alive":true
};

/* let prmPost = new Promise((resolve, reject) => {
    request.post({url: URL_API, form:jsonSend}, (error, response, body) => {
        response.statusCode === 201
        ? resolve(JSON.parse(body))
        : reject(`Error al ejecutar peticion post: ${error}`);
    });
});

prmPost
.then((responseData) => {
    console.log(`Nuevo autor creado: ${responseData.id} ${responseData.name} ${responseData.last_name}`);
})
.catch((errorMsg) => {
    console.log(errorMsg);
});  */

// get one
/* let prmGet = new Promise((resolve, reject) => {
    request.get(`${URL_API}1254/`, (error, response, body) => {
        response.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject(`Error al ejecutar peticion get: ${error}`);
    });
});

prmGet
.then((authorData) => {
    console.log(`Autor encontrado: ${authorData.id} ${authorData.name} ${authorData.last_name}`);
})
.catch((errorMsg) => {
    console.log(errorMsg);
}); */

// put one
/*jsonSend.biography += " que tiene problemas con su empresa";


let prmPut = new Promise((resolve, reject) => {
    request.put({url: `${URL_API}1254/`, form: jsonSend}, (error, response, body) => {
        response.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject(`Error al ejecutar peticion put: ${error}`);
    });
});

prmPut
.then((responseData) => {
    console.log(`Autor actualizado con put: ${responseData.id} ${responseData.name} ${responseData.last_name} ${responseData.biography}`);
})
.catch((errorMsg) => {
    console.log(errorMsg);
}); */


// patch one
/*jsonSend.last_name = "Cid Garcia";
jsonSend.biography += ". Pero ha salido adelante";
let prmPatch = new Promise((resolve, reject) => {
    request.patch({url: `${URL_API}1254/`, form: jsonSend}, (error, response, body) => {
        console.log(response.statusCode +' ' + response.statusMessage);

        response.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject(`Error al ejecutar peticion patch: ${error}`);
    });
});

prmPatch
.then((responseData) => {
    console.log(`Autor actualizado con patch: ${responseData.id} ${responseData.name} ${responseData.last_name} ${responseData.biography}`);
})
.catch((errorMsg) => {
    console.log(errorMsg);
}); */

// delete one
/* let prmDelte = new Promise((resolve, reject) => {
    request.delete(`${URL_API}1254/`, (error, response) => {
        response.statusCode === 204
        ? resolve("Autor eliminado correctamente")
        : reject("Error al hacer la peticion delete: " + error);
    });
});

prmDelte
.then((message) => {
    console.log(message);
})
.catch((errorMsg) => {
    console.log(errorMsg);
}); */