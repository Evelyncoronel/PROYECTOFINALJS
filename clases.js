//* Bienvenida */

let textoA = 'Bienvenida a Baraco';
let nombreIngresado= prompt ('Ingrese su nombre');
console.log ('Ingrese su nombre');

let unir= textoA + nombreIngresado

const carrito = document.getElementById('carrito');
const producto = document.getElementById('lista-productos');
const listaProductos = document.querySelector('lista-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');

listaProductos();

function listaProductos({
    producto.addEventListener('click', comprarProductos);
    carrito.addEventListener('click', eliminarProductos);
    vaciarCarrito.addEventListener('click', vaciarCarrito);
}

function comprarProductos(e) {
    e.preventDefault();
}

//*Ejemplo*/

let calculate = document.getElementById('calculate');  //boton
let input_number = document.getElementById('input_number') ; //input
let result = document.getElementById('result'); //resultado

calculate.onclick =()=>{
    let number = input_number.ariaValueMax;
    let suma_modo_1 = 0:
    let suma_modo_2 = 0;
    let suma_modo_3 = 0;
    for (let i= 0; i <  number; i++) {
        suma_modo_1 = suma_modo_1 + 1; // primera forma de uso
            suma_modo_2 +=1; //segunda forma de uso
    }
    result.innerHTML = `<p>Resultado suma modo 1: ${suma_modo_1}<p>
                        <p>Resultado suma modo 2: ${suma_modo_2}<p>
                        <p>Resultado suma modo 3: ${suma_modo_3}<p>`;
}

//*Operador logico and*/
const carrito = [];

let carrito = 'el carrito está vacío'

//?Ejemplo/
let calculate = document.getElementById('calculate'); //boton
let number_one = document.getElementById('number_one'); // primer input 
let number_two = document.getElementById('number_two'); // segundo input 
let result = document.getElementById('result');

calculate.onclick = ()=>{
    let first_value = number_one.value;
    let second_value = number_two.value;
    (first_value > second_value) && (result.innerHTML = `<p>El primer valor ${first_value} es mayor que el segundo</p>`);
    