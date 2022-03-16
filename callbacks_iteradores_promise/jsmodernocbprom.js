
        let fadd = (num1, num2) => parseFloat(num1) + parseFloat(num2);
        //let miimagen = document.getElementById("");
       // miimagen.style.visibility = "hidden";
        function foperaciones (num1, num2, oper){
            let resultado = 0;
            switch (oper) {
                case "+":
                    resultado = parseFloat(num1) + parseFloat(num2);
                    break;
                case "-":
                    resultado = parseFloat(num1) + parseFloat(num2);
                    break;
                case "*":
                    resultado = parseFloat(num1) + parseFloat(num2);
                    break;
                case "/":
                    resultado = parseFloat(num1) + parseFloat(num2);
                    break;
                    
            }
            return resultado;
        }
        //Funcion calllback
        function fopera(fncall){
            let valor1 = prompt("ingrese el valor 1: ");
            let valor2 = prompt("ingrese el valor 2: ");
            return fncall(valor1,valor2,operador);
        }
        //ejecutar
        // fopera(fadd);
        // console.log(fopera(fadd));

        function servidor(){
            setTimeout(function(){
                //console.log("El servidor a generado una respuesta ...");
                let datosper = {di:"123", nombre: "antonio  Grajales", salario:2300000};
                //console.log(`${datosper.di}, ${datosper.nombre}, ${datosper.salario}`);
                //miimagen.style.visibility ="hidden";
                document.getElementById('di').value = datosper.di;
                document.getElementById('nombre').value = datosper.nombre;
                document.getElementById('salario').value = datosper.salario;
            },5000)
        }

       // function fncb(fnc){
         //   fnc();
            //console.log("Espere, por favor ...");
           // miimagen.style.visibility = "visible";
                //document.getElementById('mensaje').innerHTML = "Espere por favor ...";
        
        //}
        //ejecutar fncb
        //fncb(servidor)

        let promesa1 = new Promise ((resolve,reject)=>{
            let nota = 5;
            if (nota >= 4){
                resolve("Tiene derecho al viaje a cartagena");
            }
            else{
                reject("No tiene derecho al viaje a cartagena");
            }
        })
        promesa1
            .then((mensaje)=>{
                console.log(mensaje);
            })
            .catch(function(error){
                console.log(error);
            })

            //promesa tipo function
            function fpromesa2(usario){
                return new Promise((resolve,reject)=>{
                    if(usario == "Lruiz"){
                        let datosusu = {nombre:"Lina Ruiz", email:"lruiz@gmail.com"};
                        resolve(datosusu);
                    }
                    else{
                        reject("Usuario no encontrado");
                    }
                })
            }

            fpromesa2("Lruiz")
                .then((data)=>{
                    console.log(`nombre: ${data.nombre}, email: ${data.email}`);
                })
                .catch((error)=>{
                    console.log("usuario no hallado");
                })
                
    