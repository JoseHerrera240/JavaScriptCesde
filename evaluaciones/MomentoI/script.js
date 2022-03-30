let inmuebles=[
    {idInmueble: 0, direccion:"", telefono:00,precio:00, estado:"ocupado"},
    {idInmueble: 1, direccion:"cra 35 67 125", telefono:3152140022,precio:258840000, estado:"disponible"},
    {idInmueble: 2, direccion:"cra 48 25 06", telefono:3150500427,precio:148000000, estado:"ocupado"},
    {idInmueble: 3, direccion:"calle 35 67 125", telefono:3151234567,precio:200000000, estado:"disponible"},
    {idInmueble: 4, direccion:"avenida 35 67 125", telefono:3158567891,precio:250000000, estado:"disponible"},
    {idInmueble: 5, direccion:"cra 62 18 12", telefono:3155677742,precio:110000000, estado:"ocupado"},
    {idInmueble: 6, direccion:"cra 48 5 15", telefono:315455455,precio:450000000, estado:"disponible"},
    {idInmueble: 7, direccion:"cra 35 67 125", telefono:315644654,precio:168000000, estado:"disponible"},
    {idInmueble: 8, direccion:"DGnal 5 45 125", telefono:315245454,precio:228000000, estado:"ocupado"},
    {idInmueble: 9, direccion:"cra 82 5 05", telefono:3002140022,precio:300000000, estado:"disponible"},
    {idInmueble: 10, direccion:"cra 80 10 12", telefono:3120505522,precio:52000000, estado:"disponible"}
]
let idInmueble =document.getElementById("idInmueble")
let direccion = document.getElementById("direccion")
let precio = document.getElementById("precio")
let telefono = document.getElementById("telefono")
idInmueble.onfocus = ()=>{
    mid.innerHTML ="* Solo se aceptan numeros";
}
idInmueble.onblur=()=>{
   mid.innerHTML ="";
}
direccion.onfocus = ()=>{
    mdescripcion.innerHTML ="* La direccion es obligatoria";
}
direccion.onblur=()=>{
    mdescripcion.innerHTML ="";
}
precio.onfocus = ()=>{
    mprecio.innerHTML ="* Debe estar entre 100 millones y 500 millones";
}
precio.onblur=()=>{
    mprecio.innerHTML ="";
}
function recorrer(ref){
    for(let i = 0; i<inmuebles.length; i++){
        var vista = inmuebles[i].estado
        if(ref == i & vista == "disponible"){
         document.getElementById('direccion').value=inmuebles[i].direccion
         document.getElementById('telefono').value=inmuebles[i].telefono
         document.getElementById('precio').value=inmuebles[i].precio
         document.getElementById('mensajenohay').innerHTML = ""
            break
        }else{
            document.getElementById('mensajenohay').innerHTML = "El inmueble no se encuentra disponible"
            document.getElementById('direccion').value=inmuebles[i].direccion
            document.getElementById('telefono').value=inmuebles[i].telefono
            document.getElementById('precio').value=inmuebles[i].precio
        }
    }
}


function search(){
    let idInmueble = parseInt(document.getElementById("idInmueble").value)
    recorrer(idInmueble)
}
//PROMESA DE TABLA
function fpinmuebles(arrobj){
    return new Promise((resolve,reject)=>{
        document.getElementById('mensajepromesa').innerHTML = "recuperando los inmuebles"
        setTimeout(()=>{
            let mstate = true
            if(mstate){
                resolve(arrobj)
            }else{
                reject("No hay usuarios que mostrar")
            }
        },4000)
    })
}

//ejecucion de promesa
fpinmuebles(inmuebles)
    .then((data)=>{
        let mihtml = `<table border = 1>
                        <th>Id del Inmueble</th>
                        <th>Dirección</th>                    
                        <th>telefono</th>                    
                        <th>Precio</th>                    
                        <th>Estado</th>                    
        `
        for(reg of data){
            if(reg.precio >=  200000000  & reg.precio <=  300000000 & reg.estado == "disponible" ){
            mihtml += `<tr>
                        <td>${reg.idInmueble}</td>             
                        <td>${reg.direccion}</td>             
                        <td>${reg.telefono}</td>             
                        <td>${reg.precio}</td>             
                        <td>${reg.estado}</td>            
                `
            }
        }
        mihtml += '</table>'
        document.getElementById('mensajepromesa').innerHTML=mihtml
    })
    .catch((error)=>{
        document.getElementById('mensajepromesa').innerHTML=error
    })
