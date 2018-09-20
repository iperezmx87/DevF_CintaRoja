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
//const urlApi = 'https://swapi.co/api/people/1';

/* let promesaPersonaje = new Promise((resolve, reject) => {
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
}); */

// solucion con SOLID
/* function getSWAPI(idPepole){
    return new Promise((resolve, reject) =>{
        request.get(`https://swapi.co/api/people/${idPepole}`, (err, response, body) => {
            if(response.statusCode === 200){
                let responseData = JSON.parse(body);
                resolve(responseData);
            }else{
                reject('Error en la peticion :(');
            }
        });
    });    
}

function getMovieForURLSWAPI(urlMovie){
    return new Promise((resolve, reject) => {
        request.get(urlMovie, (err, response, body) => {
            if(response.statusCode === 200){
                let responseData = JSON.parse(body);
                resolve(responseData);
            }else{
                reject('Error en la peticion :(');
            }
        });
    });
}

getSWAPI(1).then((responseData) => {
    console.log(responseData.name);

    // la magia
    return getMovieForURLSWAPI(responseData.films[0]).then((filmData) => {
        console.log(filmData.title);
    });
}).catch((errorMsg) =>{
    console.log(errorMsg);
}); */

// mas ejercicios de promesas :D
//1.- https://coinmarketcap.com/api/ devolver el nombre de las 10 criptomonedas mas caras en pesos mexicanos.
/* const urlApi = 'https://api.coinmarketcap.com/v2/ticker/?limit=20&sort=rank&convert=MXN&structure=array';

function obtenerInfoCripto(urlApi){
    // obtener la informacion de las monedas
    return new Promise((resolve, reject) => {
        request.get(urlApi, (err, response, body) =>{
            response.statusCode === 200 
            ? resolve(JSON.parse(body)) 
            : reject(`Error al pedir la info al sitio: ${err}`);
        });
    });
}

obtenerInfoCripto(urlApi)
.then((infoCrypto) => {
    // de esta lista, usar sort para ordenar los elementos descendiente 
    let cryptoSorted = infoCrypto.data.sort(function(a,b){
        return b.quotes.MXN.price - a.quotes.MXN.price;
    });

    // los imprimo
    cryptoSorted.map((cryptoItem) => {
        console.log(`Nombre de la moneda: ${cryptoItem.name}`);
        console.log(`Valor en MXN: $${cryptoItem.quotes.MXN.price}`);
        console.log('');
    });
})
.catch((errMsg) => console.log(errMsg)); */

// 2- Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso
function obtienePokemon(idPokemon){
    return new Promise((resolve, reject) =>{
        request.get(`http://pokeapi.co/api/v2/pokemon/${idPokemon}`, (err, response, body) => {
            response.statusCode === 200 
            ? resolve(JSON.parse(body))
            : reject(`Error al pedir la info al sitio: ${err}`);
        });
    });
}

for(let index = 1; index <= 10; index++){
    obtienePokemon(index)
    .then((pokemonData) => {
        console.log(`Pokemon num: ${index}`);
        console.log(`Nombre: ${pokemonData.name}`);
        console.log('');
        console.log('Movimientos:');
       
       pokemonData.moves.map((pokemonMove) => {
          console.log(` - ${pokemonMove.move.name}`);
       });

       console.log('');
       console.log('Tipo(s) de pokemon:');

        pokemonData.types.map((pokemonType) => {
            console.log(`  - ${pokemonType.type.name}`);
        });

        console.log('');
        console.log(`Tamaño del pokemon: ${pokemonData.heigt}`);

        console.log('');

        console.log(`Peso del pokemon: ${pokemonData.weight}`);
    })
    .catch((error) => {
        console.log(error);
    });
}