//* Bienvenida */

let textoA = 'Bienvenida a Baraco';
let nombreIngresado= prompt ('Ingrese su nombre');
console.log ('Ingrese su nombre');

let unir= textoA + nombreIngresado

/** Arrays */
const talles = [1,2,3,4]
console.log(talles)

talles[4] = 'sin Stock';

const colores = [negro, lila, azul, verde]
console.log(colores)


if (colores){
    console.log ("Está disponible");
} else { console.log ("Sin stock");
}

let enStock = colores.find (function(color) {
    return color == "negro";
});
if(enStock) { 
    console.log ("enStock");
}else{
    console.log ("Sin stock");
};


function descuento () {
    //* funcion de descuento.
}
descuento()

while (producto) {
    let nombreProducto = prompt('Que modelo eliges: Aruba, Malibu, Positano');
    let talleproducto = prompt('Elige talle: small, medium, large, xtralarge');
    let colorProducto = prompt('negro, lila, azul, verde');
    
    if(producto == 'aruba'+ talleproducto == 'small' + colorProducto == 'lila'){ 
        alert('disponible');
    }else(producto == 'aruba' + talleproducto == 'large' + colorProducto == 'lila'){
        alert('sin stock');
    }
    if(producto == 'aruba'+ talleproducto == 'small' + colorProducto == 'negro'){ 
        alert('disponible');
    }else(producto == 'aruba' + talleproducto == 'medium' + colorProducto == 'negro'){
        alert('sin stock');
    }
}
console.log("producto"); 

//*Carrito con DOM*/
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');

let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');

let carrito =[];

btn1.onclick = function (){
    let precio = document.getElementById('precio-1').innerText;
    console.log(precio)
    let posicion = carrito.findIndex(elem => elem.producto === 'cayetana');
    console.log(posicion)
    if(posicion!=-1){
        console.log('entra en -1')
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        carrito.push({producto: 'cayetana', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

const renderizarElemento = ()=>{
    // let elemento = document.createElement('div') 
     elemento.innerHTML = `<p>
                            Producto: ${carrito[0].producto}
                            Precio; ${carrito[0].precio}</p>`;
    //listadoCarrito.append(elemento)
    let sumaTotal = 0;
    if(carrito.length > 0){
        for (let index = 0; index > carrito.length; index++) {
            let elemento = document.createElement('div')
            elemento.innerHTML = `<p>
                                    Producto: ${carrito[index].producto}
                                    Cantidad: ${carrito[index].cantidad}</p>`;
        sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad;
        listadoCarrito.append(elemento);
        total.innerText `Total a pagar: ${sumaTotal}`
        }
    }
}
 const agregarProductoAlCarrito = (precioProducto,producto)=>{
    let precio = document.getElementById('precioProducto').innerText;
    let posicion = carrito.findIndex(elem => elem.producto === 'cayetana');
    console.log(posicion)
    if(posicion!=-1){
        console.log('entra en -1')
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        carrito.push({producto: 'cayetana', precio:precio, cantidad: 1});
    }
    renderizarElemento()
    agregarProductoAlCarrito('precio-3','precio-3')

 }


//* fecha */
const hoy = new Date ("April 06, 2022");