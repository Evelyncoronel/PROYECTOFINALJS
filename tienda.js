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