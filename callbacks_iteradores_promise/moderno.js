
            // function fadd(num1,num2) {
            //     return parseFloat(num1)+parseFloat(num2);
            // }

            let fadd = (num1,num2) => parseFloat(num1)+parseFloat(num2);

            function fops(num1,num2,oper){
                let res = 0;
                switch (oper) {
                    case "+":
                        res = parseFloat(num1)+parseFloat(num2);
                        break;
                    case "-":
                        res = parseFloat(num1)-parseFloat(num2);
                    break;
                    case "*":
                        res = parseFloat(num1)*parseFloat(num2);
                        break;
                    case "/":
                        res = parseFloat(num1)/parseFloat(num2);
                    break;
                }
                return res;
            }
            //Callback
            function fop(fncall) {
                let valor1 = prompt("Ingrese el valor 1:");
                let valor2 = prompt("Ingrese el valor 2:");
                let op = prompt("Ingrese el operador + - * /:");
                return fncall(valor1,valor2,op);
            }
            //Ejecutar
            console.log(fop(fadd));
            console.log(fop(fops));

    //         let load = document.getElementById('loading');
    //         load.style.visibility = 'hidden';
    //         function servidor(){
    //             setTimeout(function(){
    //                 let datosper = {di:"123",nombre:"Antonio",salario:2500000};
    //                 console.log("Server response");
    //                 console.log(`${datosper.di} ${datosper.nombre} ${datosper.salario}`);
    //                 document.getElementById('di').value = datosper.di;
    //                 document.getElementById('nombre').value = datosper.nombre;
    //                 document.getElementById('salario').value = datosper.salario;
    //                 document.getElementById('mensaje').innerHTML = "Server response";

    //                 load.style.visibility = 'hidden';
    //             },5000)
    //         }
            
    //         function fncb(fnc){
    //             fnc();
    //             console.log("Please wait...");
    //             load.style.visibility = 'visible';
    //             document.getElementById('mensaje').innerHTML = "Please wait...";
    //         }

    //         fncb(servidor);
    // // Promesas
    //         let promesa1 = new Promise((resolve,reject)=>{
    //             let nota = 5;
    //             if (nota >= 4) {
    //                 resolve("Tiene derecho al viaje");
    //             }else{
    //                 reject("NO tiene derecho al viaje");
    //             }
    //         })

    //         promesa1
    //             .then((mensaje)=>{
    //                 console.log(mensaje);
    //             })
    //             .then(()=>{
    //                 console.log("...con todos los axcesos...");
    //             })
    //             .catch(function(error){
    //                 console.log(error);
    //             })

    //         function fpromesa2(usuario){
    //             return new Promise((resolve, reject)=>{
    //                 if(usuario=="lruiz"){
    //                     let datosper = {nombre:"Lina Ruiz",email:"lruiz@gmail.com"};
    //                     resolve(datosper);
    //                 }else{
    //                     reject("Not found");
    //                 }
    //             })
    //         }
    //         fpromesa2("lruiz")
    //             .then((data)=>{
    //                 console.log(`Nombre: ${data.nombre}, Email: ${data.email}`);
    //             })
    //             .catch((error)=>{
    //                 console.log("Not found");
    //             })
        