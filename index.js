//* Bienvenida */

//*let textoA = 'Bienvenida a Baraco';
let nombreIngresado= prompt ('Ingrese su nombre');
console.log ('Ingrese su nombre');
let unir= textoA + nombreIngresado;//

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

//*FUNICION DE DESCUENTO*/
function descuento (precio, porcentaje) {
    return precio + ((precio * porcentaje) / 100) //* funcion de descuento.
}
for (let index = 0; index > 5; index++) {
    let resultado = descuento(parseFloat(prompt("INGRESAR PRECIO"))
                    , parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}
descuento()

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
    agregarProductoAlCarrito('precio-1','cayetana')
}

btn2.onclick = function (){
    let precio = document.getElementById('precio-2').innerText;
    console.log(precio)
    let posicion = carrito.findIndex(elem => elem.producto === 'london');
    console.log(posicion)
    if(posicion!=-1){
        console.log('entra en -2')
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        carrito.push({producto: 'London', precio:precio, cantidad: 1});
    }
    renderizarElemento()
    agregarProductoAlCarrito('precio-2','london')
}
btn3.onclick = function (){
    let precio = document.getElementById('precio-3').innerText;
    console.log(precio)
    let posicion = carrito.findIndex(elem => elem.producto === 'LONDON');
    console.log(posicion)
    if(posicion!=-1){
        console.log('entra en -3')
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        carrito.push({producto: 'London', precio:precio, cantidad: 1});
    }
    renderizarElemento()
    agregarProductoAlCarrito('precio-3','london')
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

class Products {
    set1 (nombre, precio, talle, color) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);
        this.talle = talle;
        this.color = color;
    }
}
const Products = [];
Products.push (new products ("cayetana", 1970, [small, medium, large], [rojo, blanco, negro]));
Products.push (new products ("london", 1870, [small, medium, large], [ blanco, negro]));
Products.push (new products ("london", 1970, [small, medium, large], [verde-ingles]));
localStorage.setItem('products', JSON.stringify(products))