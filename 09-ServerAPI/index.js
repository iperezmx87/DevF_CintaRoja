// hacer servidor rest api con express
// instanciar el servidor de express
const express = require('express');
const app = express();

// mapear acciones
app.get('/', (req, res) => res.send('<h2>La API funciona !!</h2>'));

app.post("/api/v1/mensajes/", (request, response) => {
    response.status(201).send({mensaje:"has hecho una peticion post"});
});

// request params
app.get("/api/v1/autores/:id/", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// request query params
app.get("/api/v1/autores", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

// body parser para formatear el cuerpo de la peticion


// ejecutar el servidor
app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));