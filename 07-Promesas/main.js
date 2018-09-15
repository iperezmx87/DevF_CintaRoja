// ejemplos de promesas
const request = require('request');

/* let promise = new Promise(function(resolve, reject){
   // resolve('Esta promesa se resolvió');
    reject('Esta promesa no se pudo resolver');
});

promise.then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
    console.log(error);
}); */

// otro ejemplo
/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve('Se resolvió la promesa');
    }, 3000);
});

promise.then((respuesta) =>{
    console.log(respuesta);
}); */

// otro ejemplo
/* let promise = new Promise((resolve, reject) => {
    let numero = 5;

    numero % 2 == 0 ? resolve('El número es par') : reject('El número es impar')

});

promise.then((respuesta) =>{
    console.log(respuesta);
}).catch((error)=> {
    console.log(error);
}); */

let promesa = new Promise((resolve, reject) => {
    request.get('https://swapi.co/api/people/1', (error, response, body)=>{
        response.statusCode == 200 
        ? resolve(JSON.parse(body))
        : reject('Codigo de respuesta: ' + response.statusCode);
    });
});

promesa
    .then((apiData) =>{
        console.log(apiData);
    })
    .catch((errorMsg) => { 
        console.log(errorMsg);
    });