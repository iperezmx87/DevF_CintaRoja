// obtener el generador de express
const express = require('express');
const bodyParser = require('body-parser')

// ejecutando el codigo de otro archivo
const {Alumno, Curso} = require('./clienteMongo.js');

// crear una instancia del server
const app = express();

// configurando body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// listo, a partir de aqui a configurar peticiones

// crud de alumnos
// post one
app.post("/api/alumnos", (req, res) => {
    let json = req.body;
    
    // -> cosas magicas y ancestrales
    // base de datos
    const nuevoAlumno = Alumno(json);

    nuevoAlumno
    .save((error, alumno) => {
         res.status(201).send(
        {
            "message" : "alumno creado exitosamente" ,
            "body": alumno,
            "error": error
        });
    });
});

// get all
app.get("/api/alumnos", (req, res) => {
    // ir a la base de datos y pedir un ison con todos los alumnos
    Alumno
    .find()
    .exec()
    .then((resultado) => {
         // -> res.send(objeto);
        res.status(200).send({
            "message": "Lista de alumnos obtenida exitosamente",
            "body": resultado
        });
    })
    .catch((error) => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// get one
app.get("/api/alumnos/:id/", (req, res) => {
    const alumnoId = req.params.id;
    //res.send(idAlumno);

    // pedir a la base de datos el alumno con el id
    Alumno
    .findById(alumnoId)
    .exec()
    .then((alumno) => {
    // enviar respuesta
        res.status(200).send(alumno);
    })
    .catch((error)  => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// put one
app.put("/api/alumnos/:id/", (req, res) => {
    const alumnoId = req.params.id;

    // pedir a la base de datos que modifique los datos 
    Alumno
    .findOneAndUpdate(
        // id
        alumnoId,
        // objeto a actualizar
        {$set: req.body},
        // opciones
        {new:true})
    .exec()
    .then((alumnoActualizado) => {
         // responder
         res.status(200).send({
             "message":"Alumno modificado correctamente",
             "body":alumnoActualizado
            });
    })
    .catch((error)  => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// delete one
app.delete("/api/alumnos/:id/", (req, res) => {
    const alumnoId = req.params.id;
    const alumnoNuevo = req.body;

    // pedir a la base de datos que elimine los datos 

    // responder
    res.status(204).send({
        "message":"Alumno eliminado correctamente",
        "body":{"resultado": "ok"}
    });
});

// crud de cursos

// post one
app.post("/api/cursos", (req, res) => {
    // guardar el curso en general en la base de datos
    const json = req.body;

    // entregar un mensaje exitoso
    res.status(201).send({
        "message": "Curso creado exitosamente",
        "body":json
    });
});

// list (get all)
app.get("/api/cursos", (req, res) => {
    // obtener todos los cursos de la base de datos
    // entregarlos
    res.status(200).send({
        "message":"Lista de cursos obtenida exitosamente",
        body:[{"id": 1, "title":"course one"},{"id": 2, "title":"course two"}]
    });
});

// get one
app.get("/api/cursos/:id/", (req, res) => {
    // pedirle a la base un elemento
    const cursoId = req.params.id;

    // enviarlo
    res.status(200).send({
        "message": "curso obtenido exitosamente",
        "body": {"id": cursoId, "title":"course one"}
    });
});

// update one
app.put("/api/cursos/:id/", (req, res) => {
    // pedirle a la base un elemento
    const cursoId = req.params.id;
    const cursoUpd = req.body;

    // actualizar el elemento

    // enviarlo
    res.status(200).send({
        "message": "curso obtenido exitosamente",
        "body": cursoUpd
    });
});

// delete one
app.put("/api/cursos/:id/", (req, res) => {
    // pedirle a la base un elemento
    const cursoId = req.params.id;
    const cursoUpd = req.body;

    //eliminar curso de la base de datos ??? depende xD

    // enviarlo
    res.status(204).send({
        "message": "curso obtenido exitosamente",
        "body": cursoUpd
    });
});

// esta intruccion inicia el servidor y siempre debe ir al final
// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});