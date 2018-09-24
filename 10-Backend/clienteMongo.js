// archivo de gestion de base de datos
// capas :D

console.log("Hola, soy el codigo de mongo mongoose jaja :D");

// nuestro objeto clasico
const mongoose = require('mongoose');

// construir la url de conexion usando api externos
const url = "mongodb://ihouse:isramx87@ds016718.mlab.com:16718/curso_polonia_api";

// conectar a la base
mongoose.connect(url,
    { useNewUrlParser: true }, 
    () => {
    console.log("conexion exitosa con la base de datos");
});

// cosas a usar en mongoose
const Schema = mongoose.Schema; // el molde de las conexiones
const ObjectId = mongoose.Schema.ObjectId; // el id del objeto

const alumnoSchema = Schema({
    alumno: ObjectId,
    nombres: String,
    apellidos: String,
    edad: Number,
    sexo: String,
    curso: {type: ObjectId, ref: 'Curso'}
});

const cursoSchema = Schema({
    curso: ObjectId,
    nombre: String,
    descripcion: String,
    precio: Number
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
const Curso = mongoose.model('Curso', cursoSchema);

module.exports = {Alumno, Curso};