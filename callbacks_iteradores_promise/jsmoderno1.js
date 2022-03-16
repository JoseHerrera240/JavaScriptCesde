let datosal = {cedula : "145" , nombre : "pepe perez", salario : 2100000,estado:true};
console.log(datosal);
console.log(`cedula: ${datosal["cedula"]}`);
console.log(`nombre: ${datosal["nombre"]}`);
console.log(`salario: ${datosal["salario"]}`);
if (datosal.estado){
    console.log("está activo");
} else{
    console.log("Esta inactivo");
}
//iterar
// for (key in datosal){
//     console.log(`${key}==>${datosal.key}`);
// }
// //Funciones tradicionales
// function mensaje () {
//     console.log("este mensaje es emitido por la funcion "+ m)
// }
// console.log(`El valor de m es: ${m}`)


function sumar(num1 , num2 = 0){
    return num1 + num2;
}
console.log(sumar(2,5));
console.log(sumar(20,50));
function operaciones (val1, val2, oper){
    let resultado = 0;
    switch(oper){
        case "+":
            resultado =  val1 + val2;
            break;
        case "-" :
            resultado = val1-val2;
            break;
        case "*" :
            resultado = val1 * val2;
            break;
        case "/" :
            resultado = val1/val2;
            break;
    }
    return resultado;
}

console.log(operaciones(3,4,"+"));
let resulta = operaciones(5,9,"-");
console.log (resulta);
if (operaciones(32,4,"/") < 10 ){
    console.log("tiene derecho a bono de mercado")
}
console.log(operaciones(5,8,"*") > 100 ? "Bono" : "No bono");

// Generar una función Que permita elevar cualquier número a cualquier exponente
//y/o sacar cualquier raíz a cualquier numerora (math.pow(ra))

function raiz (numerora, exponentera) {
    resultadora = Math.pow(numerora, exponentera);
    return resultadora;
}
console.log(raiz(3,5));

//arrow function y/o anónimas
let misuma = function (val1, val2) {return val1 + val2};
let misuma1 = (val1, val2)=> val1+val2; 
let misuma2 = (val1, val2)=> {return val1+val2}; 
console.log(misuma(4,5));
console.log(misuma1(5,9));
console.log(misuma2(8,5));
const iva = 16/100;
//iva = 16/100;
const fcat = function(cat) {return cat == "a" ? 1000 : 15000}
const fcat1 = (cat) => cat == "a" ? 1000 : 15000
    console.log(fcat("a"));
    console.log(fcat("b"));

//callbacks : es una funcion que pasa del control a otra función
function mensaje(){
    console.log("Hola desde una función invocada por otra");
}

function fcallback(fcallback){
    fcallback()
}
fcallback(mensaje);

function greetting(name){
    alert(`Hola, ${name}`);
}
function fngreeting(fncall){
    let mname = prompt ("ingrese el nombre");
    fncall(mname);
}
//uso 
fngreeting(greetting);