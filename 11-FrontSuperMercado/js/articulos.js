// view model jejeje
let articulo = {
    Nombre: "",
    Precio: 0.00,
    Existencias: 0
};

const URLBASE = "http://localhost:3000/";

let VistaModelo = {
    // model
    Articulos: ko.observableArray([]),
    Articulo: ko.observable(articulo),
    idArticuloSeleccionado: ko.observable(""),

    // commands :D
    CargarArticulos: () => {
        // axios
        let endpoint = `${URLBASE}api/articulos/`;
        axios.get(endpoint)
        .then((articulosData) => {
            VistaModelo.Articulos(articulosData.data.body);
            VistaModelo.Articulos.valueHasMutated();
        })
        .catch((error) => {
            alert(error);
        });
    },
    // abrir dialogo
    AbrirDialogo:() => {
        VistaModelo.idArticuloSeleccionado("");
        VistaModelo.idArticuloSeleccionado.valueHasMutated();
        VistaModelo.Articulo(articulo);
        VistaModelo.Articulo.valueHasMutated();
        $('#modalNuevoArticulo').modal('show');
    },
    GuardarRecibo:() =>{
        // guardar 
        if(VistaModelo.Articulo().Nombre != "" && 
        VistaModelo.Articulo().Precio != 0 &&
        VistaModelo.Articulo().Existencias != 0){
            let endpoint = `${URLBASE}api/articulos/`;
        
            let requestPromise;
    
            if(VistaModelo.idArticuloSeleccionado() == ""){
                // post
                requestPromise = axios.post(endpoint, VistaModelo.Articulo());
            }else{
               //put
                requestPromise = axios.put(`${endpoint}${VistaModelo.idArticuloSeleccionado()}/`, VistaModelo.Articulo());
            }
    
            requestPromise
            .then((respuesta) =>{
                $('#modalNuevoArticulo').modal('hide');
                VistaModelo.CargarArticulos();
                alert(respuesta.data.message);
            })
            .catch((error) => {
                alert(error);
            });
        }else{
            alert("Datos incompletos");
        }
    },
    SeleccionarArticulo: (linkObj) => {
        // get one and show
        let idArticuloSeleccionado = linkObj.firstChild.textContent; //trObj.children[0].firstChild.textContent;
        let endpoint = `${URLBASE}api/articulos/${idArticuloSeleccionado}/`;
 
        axios.get(endpoint)
        .then((respuesta) => {
            let articulo = respuesta.data;
            VistaModelo.idArticuloSeleccionado(idArticuloSeleccionado);
            VistaModelo.idArticuloSeleccionado.valueHasMutated();
            VistaModelo.Articulo(articulo);
            $('#modalNuevoArticulo').modal('show');
        })
        .catch((error) => {
            alert(error);
        });
    },
    EliminarArticulo: (btnObj) => {
        let idArticuloSeleccionado = btnObj.parentNode.parentNode.children[0].children[0].firstChild.textContent;
        let endpoint = `${URLBASE}api/articulos/${idArticuloSeleccionado}`;
        axios.delete(endpoint)
        .then((respuesta) => {
            VistaModelo.CargarArticulos();
            alert("Artículo eliminado correctamente");
        })
        .catch((error) => {
            alert(error);
        });
    }
}

$(document).ready(() =>{
    ko.applyBindings(VistaModelo);
    VistaModelo.CargarArticulos();
});