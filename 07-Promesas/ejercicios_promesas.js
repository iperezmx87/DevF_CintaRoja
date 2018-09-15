// ejercicios de promesas
//Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver el género de la banda deseada

const request = require('request');

//const urlApi = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=green+day';

/* const promesaAudio = new Promise((resolve, reject) => {
    // trabajando la peticion
    request.get(urlApi, (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject('Codigo de respuesta: ' + response.statusCode);
    });
});

promesaAudio
.then((apiData) => {
    apiData.artists.map((item) => {
        console.log(item);
        console.log(`El nombre de la banda es ${item.srtName}`);
        console.log(`El genero de la banda es: ${item.strGenre}`);
    });
})
.catch((errorMsg)=> console.log(errorMsg)); */

//Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy. 
//(https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i)

/* const fechaInicioParam = '2018-09-09';
const fechaFinParam = '2018-09-14';
const NASA_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicioParam}&end_date=${fechaFinParam}&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i`;

const promesaNasa = new Promise((resolve, reject) => {
    // trabajando la peticion
    request.get(NASA_URL, (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject('Codigo de respuesta: ' + response.statusCode);
    });
});

promesaNasa
.then((apiDataResult) => {
    let fechas = apiDataResult.near_earth_objects;

    let asteroidesPeligrosos = [];
    Object.keys(fechas).forEach(function(key){
        asteroidesPeligrosos = fechas[key].map((asteroide) => {
            if(asteroide.is_potentially_hazardous_asteroid){
                asteroidesPeligrosos.push(asteroide);
                console.log(`nombre del asteroide peligroso: ${asteroide.name}`);
            }else
            {
                console.log(`nombre del asteroide no peligroso: ${asteroide.name}`);
            }
        });
    });
})
.catch((msgError) => {
    console.log(msgError);
}); */

// ejercicio de tarea:
// Hacer una petición a la swapi a un personaje y obtener sus películas.
const urlApi = 'https://swapi.co/api/people/1';

let promesaPersonaje = new Promise((resolve, reject) => {
    // haciendo la primer peticion
    request.get(urlApi, (error, response, body) => {
        if(response.statusCode == 200){
            resolve(JSON.parse(body));
        }else{
            reject('Error: ' + response.statusMessage);
        }
    });
});

// ejecutando la promesa
promesaPersonaje
// exitosa
.then((responseData) => {
    // recibo los datos del personaje
    console.log(`Personaje: ${responseData.name}`);
    // iterar las peliculas
    responseData.films.map((urlFilm) => {
        // generar otra promesa
        let promesaPelicula = new Promise((resolve, reject) =>{
            request.get(urlFilm, (error, response, body)=> {
                if(response.statusCode == 200){
                    resolve(JSON.parse(body));
                }else{
                    reject('Error: ' + response.statusMessage);
                }
            });
        });

        promesaPelicula
        .then((filmInfo) => {
            console.log(`Peliculas donde sale el personaje: ${filmInfo.title}`);
        })
        .catch((errorMsg) => {
            console.log(errorMsg);
        });
    });
})
// error
.catch((errorMsg) => {
    console.log(errorMsg);
});