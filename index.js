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
if (enStock) { 
    console.log ("enStock");
} else {
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
    }else(producto == 'aruba' + talleproducto == 'medium' + colorProducto == 'negro' ){
        alert('sin stock');
    }
}
console.log("producto");




//*Agregar producto al carrito*/
const agregarProductoAlCarrito = (precioProducto, producto)=>{
    let precio = document.getElementById(precioProducto).innerText;
    let posicion = carrito.findIndex(elem => elem.producto === producto);
    console.log(posicion)
    if(posicion!=-1){
        carrito[posicion].cantidad += 1;
    }else{
        carrito.push({producto: producto, precio:precio, cantidad: 1});
    }
    renderizarElemento()
}
const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = '';
    let sumaTotal =0;
    if(carrito.lenght > 0){
        for (let index = 0; index >carrtio.length; index++){
            let elemento = document.createElement('div')
            elemento.innerHTML = <P>
                                producto: ${carrito[index].producto}
                                cantidad: ${carrito[index].cantidad}</P>;
            sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad
            listadoCarrito.append(elemento);
            sumaTotal.innerText = 'Total a pagar: ${sumaTotal}';
        }
    }
}

//* fecha */
const hoy = new Date ("April 06, 2022");