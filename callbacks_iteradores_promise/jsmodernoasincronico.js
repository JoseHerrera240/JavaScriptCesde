
        let usuarios = [
            {user:"tgil", nombre:"Tulio Gil", correo:"tgil@gmail.com"},
            {user:"wrodas", nombre:"Walter Rodas", correo:"wrodas@gmail.com"},
            {user:"obonilla", nombre:"Otilia Bonilla", correo:"obonilla@gmail.com"},
            {user:"lzuluaga", nombre:"Luisa Zuluaga", correo:"lzuluaga@gmail.com"},
            {user:"macosta", nombre:"Maria Acosta", correo:"macosta@gmail.com"}
        ]
        //Generación de la promesa asincónica para listar el arreglo de objetos
        function fpusuarios(arrobj){
            return new Promise((resolve, reject)=>{
                document.getElementById(`mensaje`).innerHTML = "Recuperando los usuarios ...";
                setTimeout(()=>{
                    let mstate = true;
                    if(mstate){
                        resolve(arrobj)
                    }else{
                        reject("No hay usuarios que mostrar")
                    }
                },4000)
            })
        }

        //ejecución
        fpusuarios(usuarios)
            .then((data)=>{
                let mihtml = `<table border = 1>
                                <th>Usuario</th>
                                <th>Nombre</th>                    
                                <th>Email</th>                    
                    `
                    // for(let p = 0; p < data.length; p++){
                    //     mihtml += `<tr>
                    //                     <td>${data[p].user}</td>
                    //                     <td>${data[p].nombre}</td>
                    //                     <td>${data[p].correo}</td>
                    //     `
                    // }
                    for(reg of data){
                        mihtml += `<tr>
                                        <td>${reg.user}</td>
                                        <td>${reg.nombre}</td>
                                        <td>${reg.correo}</td>
                        `
                    }
                    mihtml += `</table>`
                    document.getElementById(`mensaje`).innerHTML = mihtml
            })
            .catch((error)=>{
                document.getElementById(`mensaje`).innerHTML=error
            })
        
    