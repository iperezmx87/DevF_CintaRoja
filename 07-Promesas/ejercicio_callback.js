// solicitar a luke skywalker
// y la primer pelicula solo con callback
const request = require('request');

request.get('https://swapi.co/api/people/1', (error, response, body) =>{
    if(response.statusCode == 200){
        let responseData = JSON.parse(body);
        // tomar la primer url y hacer una peticion
        console.log(`Personaje: ${responseData.name}`);
        request.get(responseData.films[0], (error, response, body) => {
            if(response.statusCode == 200){
                let filmData = JSON.parse(body);
                console.log(`primer pelicula de ${responseData.name}: ${filmData.title}`);
            }else{
                console.log("No encontrado");
            }   
        });
    }else{
        console.log("No encontrado");
    }
});