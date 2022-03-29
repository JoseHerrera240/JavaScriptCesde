let productos = [
    {referencia: 0, descripcion: "PH jumbo", preciounitario: 1000, existencia: 10},
    {referencia: 1, descripcion: "Ultrex ", preciounitario: 21800, existencia: 56},
    {referencia: 2, descripcion: "suavizante ", preciounitario: 14000, existencia: 20},
    {referencia: 3, descripcion: "Limpión", preciounitario: 25000, existencia: 12},
    {referencia: 4, descripcion: "Toalla de manos", preciounitario: 127000, existencia: 35},
    {referencia: 5, descripcion: "Neutro ", preciounitario: 14000, existencia: 78},
    {referencia: 6, descripcion: "Bolsa ", preciounitario: 3400, existencia: 25},
    {referencia: 7, descripcion: "DEtergente", preciounitario: 12000, existencia: 32},
    {referencia: 8, descripcion: "Limpia pisos", preciounitario: 9000, existencia: 56},
    {referencia: 9, descripcion: "astral", preciounitario: 12000, existencia: 10}
 ]
let tablaProducto = document.getElementById('tablaProductos')
let cuerpoTabla = document.createElement('tbody')
function recorrer(ref){
    for (let i = 1; i<productos.length; i++){
       if( ref == i){
           console.log(productos[i])
           console.log(productos[i].referencia)
           document.getElementById('descripcion').value=productos[i].descripcion
           document.getElementById('precio').value=productos[i].preciounitario
           document.getElementById('existencia').value=productos[i].existencia
       }else{
           console.log("ERROOOOOOR")
       } 
    }
}
let load = document.getElementById('loading')
load.style.visibility = 'hidden'
function search(){
    let referencia = parseInt(document.getElementById("referencia").value)
    recorrer(referencia)
    load.style.visibility = 'hidden'
 }
function servidor(){
    setTimeout( search() ,5000)
}
function fncb(fnc){
    fnc()
    load.style.visibility = 'visible'
}

fncb(servidor)

//Script para mostrar los productos en la tabla



productos.forEach(p => {
    console.log(p.referencia)
    let fila = document.createElement('tr')

    let td = document.createElement('td')
    td.innerText = p.referencia
    fila.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = p.descripcion
    fila.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = p.preciounitario
    fila.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = p.existencia
    fila.appendChild(td)

    cuerpoTabla.appendChild(fila)
})

tablaProducto.appendChild(cuerpoTabla)



//script de promesas y callbacks

// let promesa1 = new Promise((resolve,reject)=>{
//     if(document.getElementById('descripcion').value == "" & document.getElementById('preciounitario').value == "" & document.getElementById('existencia').value == ""){
//         resolve("El item se encuentra en la base de datos")
//     }else{
//         reject("No se encuentra el producto en la base de datos")
//     }
// })

// .then((mensaje)=>{
//     console.log(mensaje)
// })
// .then(()=>{
//     console.log("BIen hecho")
// })
// .catch(function(error){
//     console.log(error);
// })

