// servidor rest
const express = require('express');
const bodyParser = require('body-parser')

// obtener cosas de mongo
const {Articulo, Recibo} = require('./datos.js');

// crear una instancia del server
const app = express();

// configurando body parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next(); 
});

// ----------------------------PETICIONES---------------------------------------
// CRUD de un articulo
app.post("/api/articulos", (req, res) => {
    let json = req.body;

    // -> cosas magicas y ancestrales
    // base de datos
    const nuevoArticulo = Articulo(json);

    nuevoArticulo
    .save((error, articulo) => {
         res.status(201).send(
        {
            "message" : "Artículo creado exitosamente" ,
            "body": articulo,
            "error": error
        });
    });
});

app.get("/api/articulos", (req, res) => {
    Articulo
    .find()
    .exec()
    .then((listaArticulo) => {
        res.status(200).send({
            "message": "Lista de artículos obtenida exitosamente",
            "body": listaArticulo
        });
    })
    .catch((error) => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

app.get("/api/articulos/:id/", (req, res) => {
    const articuloId = req.params.id;

    // pedir a la base de datos el alumno con el id
    Articulo
    .findById(articuloId)
    .exec()
    .then((articulo) => {
    // enviar respuesta
        res.status(200).send(articulo);
    })
    .catch((error)  => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

app.put("/api/articulos/:id/", (req, res) => {
    const articuloId = req.params.id;

    console.log(req.body);

    let articuloUpd = {
        Nombre:req.body.Nombre,
        Precio:req.body.Precio,
        Existencias:req.body.Existencias
    };

    // pedir a la base de datos que modifique los datos 
    Articulo
    .findByIdAndUpdate(
        // id
        articuloId,
        // objeto a actualizar
        {$set: articuloUpd},
        // opciones
        {new:true})
    .exec()
    .then((articuloActualizado) => {
         // responder
         res.status(200).send({
             "message":"Artículo modificado correctamente",
             "body":articuloActualizado
            });
    })
    .catch((error)  => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

app.delete('/api/articulos/:id/', (req, res) => {
    const articuloId = req.params.id;

    Articulo
    .findByIdAndDelete(articuloId)
    .then((resultado) => {
        res.status(204).send({
            "message":"Artículo eliminado correctamente"
        });
    })
    .catch((error) => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// CRUD para los recibos
// nuevo recibo
app.post('/api/recibos', (req, res) => {
    let json = req.body;
    // -> cosas magicas y ancestrales
    // base de datos
    const nuevoRecibo = Recibo(json);

    nuevoRecibo
    .save((error, recibo) => {
         res.status(201).send(
        {
            "message" : "Recibo creado exitosamente" ,
            "body": recibo,
            "error": error
        });
    });
});

// lista de recibos
app.get('/api/recibos', (req, res) => {
    // aqui revisar la parte del populate
    Recibo
    .find()
    .exec()
    .then((listaRecibos) => {
        res.status(200).send({
            "message": "Lista de recibos obtenida exitosamente",
            "body": listaRecibos
        });
    })
    .catch((error) => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// obtener recibo y sus articulos
app.get('/api/recibos/:id/', (req, res) => {
    const reciboId = req.params.id;

    // pedir a la base de datos el alumno con el id
    Recibo
    .findById(reciboId)
    .populate('Articulos')
    .exec()
    .then((recibo) => {
    // enviar respuesta
        res.status(200).send(recibo);
    })
    .catch((error)  => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// el put puede estar bueno :D
// se actualiza el recibo en base a la cantidad de articulos que se tenga
// interesante
// actualiza la lista de articulos, y aqui se actualizan los valores
// devoler el registro actualizado
app.put('/api/recibos/:id/', (req, res) => {
    // buscando elementos
    const reciboId = req.params.id;

    // obtener la lista de id de articulos
    let listaIdsArticulos = req.body.Articulos;

    // buscandooooo
    Articulo.find({_id:{$in:listaIdsArticulos}}, (err, resultados) => {
        // arreglo de elementos encontrados por id :D ya no tengo que iterar
        // total del recibo
        let total = 0.00
        
        resultados.map((articulo) => {
           total += articulo.Precio;
        });

        // yeah !! :D
        // calcular
        let subTotal = (total / 1.16);
        let iva = total - subTotal;

        const ReciboUpd = {
            Subtotal: subTotal,
            IVA: iva,
            Total: total,
            Articulos: listaIdsArticulos         
        };

        Recibo.findByIdAndUpdate(
            // id
            reciboId,
            // objeto a actualizar
            {$set: ReciboUpd},
            // opciones
            {new:true})
        .exec()
        .then((reciboActualizado) => {
            // responder
            res.status(200).send({
                "message":"Recibo modificado correctamente",
                "body":reciboActualizado
            });
        })
        .catch((error)  => {
            res.status(404).send({
                "message": error,
                "body": null
            });
        });
    });
});

app.delete('/api/recibos/:id/',(req, res) => {
    const reciboId = req.params.id;

    Recibo
    .findByIdAndDelete(reciboId)
    .then((resultado) => {
        res.status(204).send({
            "message":"Recibo eliminado correctamente"
        });
    })
    .catch((error) => {
        res.status(404).send({
            "message": error,
            "body": null
        });
    });
});

// -------------------------------------------------------------------
// esta intruccion inicia el servidor y siempre debe ir al final
// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});