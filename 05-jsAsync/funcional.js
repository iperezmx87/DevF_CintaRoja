var lista = [1,2,3,4,5,6,7,8,123,5436,123132];

// otra tecnica para iterar mas pro
// evitar un for
// funcion map
/* lista.map((elemento, indice, copyList) => {
    console.log(elemento);
    console.log(indice);
    console.log(z); // la lista de elementos iterados
}); */

// se puede prescindir de copyList o de indice

// acumuladores y contadores
var acumulador = lista.map((element) =>{
   return element - 1;
});

console.log(acumulador);

// filter
// funciona igual solo que espera un filtro en la informacion
// excelentes para filtrar e iterar listas

var lista = [1,2,3,4,5,5,6,7,23,4234,12,312]
const obj = [
    {data:"hola",nombre:"juana"},
    {data:"oli",nombre:"Panchito"},
    {data:"asd",nombre:"pedro"}]
    
var acumulador = obj.map((element)=>{
    return element.nombre
})

//console.log(acumulador);

var tasks = [
    {
      name     : 'Write for Envato Tuts+',
      duration : 120
    },
    {
      name     : 'Work out',
      duration : 60
    },
    {
      name     : 'Procrastinate on Duolingo',
      duration : 240
    }
  ];

  var filter = tasks.filter((element)=>{
      return element.duration >= 120 
  })
  console.log(filter)