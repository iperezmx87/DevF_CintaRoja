// ejercicios de restfull
// las cosas chidas de cinta roja :D
// esto es el equivalente a import
const request = require('request');

// haciendo una peticion de http get
/*     
    request.get('https://swapi.co/api/people/20', (error, response, body) => {

    console.log(json.name);
    console.log(json.birth_year);
 
console.log(response.statusCode);
    if(response.statusCode === 200){
        let json = JSON.parse(body);
        console.log("Peticion exitosa");
        console.log(json.name);
    }else{
        console.log("Personaje no encontrado.");
    }
});
*/
function peticion(){
    request.get('https://openlibrary.org/search.json?q=i+robot', (error, response, body)=>{
        let json = JSON.parse(body);
        console.log(json.docs[0].title_suggest);
    });
}
peticion();