// recibos
let recibo = {
    Subtotal: 0.00,
    IVA: 0.00,
    Total: 0.00,
    Articulos: []
};

const URLBASE = "http://localhost:3000/";

let VistaModelo = {
    Recibos: ko.observableArray([]),
    Recibo: ko.observable(recibo),
    IdReciboSeleccionado: ko.observable(""),

    CargarRecibos: () => {
        let endpoint = `${URLBASE}api/recibos/`;
        axios.get(endpoint)
        .then((recibosData) => {
            VistaModelo.Recibos(recibosData.data.body);
            VistaModelo.Recibos.valueHasMutated();
        })
        .catch((error) => {
            alert(error);
        });
    },

    ListaArticulosSeleccionados: ko.observableArray([]),
    ListaArticulos: ko.observableArray([]),

    NuevoRecibo: () => {
        // los documentos recibo deben siempre iniciar en ceros
        // generar nuevo recibo, obtenerlo y empezar a rellenarlo con articulos
        VistaModelo.Recibo(recibo);
        VistaModelo.Recibo.valueHasMutated();

        VistaModelo.ListaArticulosSeleccionados([]);
        VistaModelo.ListaArticulosSeleccionados.valueHasMutated();
        
        // hacer el post y pintar el nuevo id
        let endpoint = `${URLBASE}api/recibos/`;
        axios.post(endpoint, VistaModelo.Recibo())
        .then((respuesta) =>{
            VistaModelo.IdReciboSeleccionado(respuesta.data.body._id);
            VistaModelo.IdReciboSeleccionado.valueHasMutated();
            VistaModelo.CargarArticulosDisponibles();
        })
        .catch((error) => {
            alert(error);
        });
    },

    CargarArticulosDisponibles:() =>{
        // cargar articulos disponibles
        axios.get(`${URLBASE}api/articulos/`)
        .then((respuesta) => {
            VistaModelo.ListaArticulos(respuesta.data.body);
            VistaModelo.ListaArticulos.valueHasMutated();
            $('#modalNuevoRecibo').modal('show');
        })
        .catch((error) => {
        });
    },

    SeleccionarRecibo: (linkObj) =>{
        // obtener la informacion del recibo y que pueda agregar o eliminar articulos
        VistaModelo.IdReciboSeleccionado(linkObj.firstChild.textContent);
        VistaModelo.IdReciboSeleccionado.valueHasMutated();

        VistaModelo.ListaArticulosSeleccionados([]);
        VistaModelo.ListaArticulosSeleccionados.valueHasMutated();

        let endpoint = `${URLBASE}api/recibos/${VistaModelo.IdReciboSeleccionado()}/`;

        axios.get(endpoint)
        .then((respuesta) => {
            // lista de articulos
            VistaModelo.ListaArticulosSeleccionados(respuesta.data.Articulos);
            VistaModelo.ListaArticulosSeleccionados.valueHasMutated();
            VistaModelo.CargarArticulosDisponibles();
            $('#modalNuevoRecibo').modal('show');
        })
        .catch((error)=>{
            alert(error);
        });
    },

    Guardar: () => {
        // entonces aca siempre habran peticiones put
        // colocando los articulos en la lista 
        let reciboEnviar = VistaModelo.Recibo();
        let ListaArticulosSeleccionadosId = [];

        let endpoint = `${URLBASE}api/recibos/${VistaModelo.IdReciboSeleccionado()}/`;

        VistaModelo.ListaArticulosSeleccionados().map((articulo) => {
            ListaArticulosSeleccionadosId.push(articulo._id);
        });

        reciboEnviar.Articulos = ListaArticulosSeleccionadosId;

        axios.put(endpoint, reciboEnviar)
        .then((respuesta) => {
            alert(respuesta.data.message);
            VistaModelo.CargarRecibos();
            $('#modalNuevoRecibo').modal('hide');
        })
        .catch((error) => {
            alert(error);
        });
    },

    EliminarRecibo: (btnObj) => {
        let idReciboSeleccionado = btnObj.parentNode.parentNode.children[0].children[0].firstChild.textContent;
        let endpoint = `${URLBASE}api/recibos/${idReciboSeleccionado}`;
        axios.delete(endpoint)
        .then((respuesta) => {
            VistaModelo.CargarRecibos();
            alert("Artículo eliminado correctamente");
        })
        .catch((error) => {
            alert(error);
        });       
    },

    // agregando y eliminando elementos del grid de articulos seleccionados
    AgregarArticulo: (linkObj) => {
        // buscando en los articulos para ponerlo en seleccionados
        VistaModelo.ListaArticulos().map((articulo) => {
            if(articulo._id == linkObj.firstChild.textContent){
                VistaModelo.ListaArticulosSeleccionados().push(articulo);
                VistaModelo.ListaArticulosSeleccionados.valueHasMutated();
            }
        });
    },
    EliminarArticulo: (linkObj) => {
        VistaModelo.ListaArticulosSeleccionados().map((articulo, indice) => {
            if(articulo._id == linkObj.firstChild.textContent){
                VistaModelo.ListaArticulosSeleccionados().splice(indice, 1);
                VistaModelo.ListaArticulosSeleccionados.valueHasMutated();
            }
        });
    }
};

$(document).ready(() => {
    ko.applyBindings(VistaModelo);
    VistaModelo.CargarRecibos();
});