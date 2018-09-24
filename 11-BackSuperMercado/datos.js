// nuestro objeto clasico
const mongoose = require('mongoose');

// construir la url de conexion usando api externos
const url = "mongodb://ihouse:abc123@ds044679.mlab.com:44679/iperez_supermercado";

// conectar a la base
mongoose.connect(url,
    { useNewUrlParser: true }, 
    () => {
    console.log("conexion exitosa con la base de datos");
});

// generar el esquema
const Schema = mongoose.Schema; // el molde de las conexiones
const ObjectId = mongoose.Schema.ObjectId; // el id del objeto
//const Decimal = mongoose.SchemaTypes.Decimal128;

const ArticuloSchema = Schema({
    Nombre: String,
    Precio: Number,
    Existencias: Number
});

const ReciboSchema = Schema({
    Subtotal: Number,
    IVA: Number,
    Total: Number,
    Articulos: [{type: ObjectId, ref:'Articulo'}]    
});

const Articulo = mongoose.model('Articulo', ArticuloSchema);
const Recibo = mongoose.model('Recibo', ReciboSchema);

module.exports = {Articulo, Recibo};