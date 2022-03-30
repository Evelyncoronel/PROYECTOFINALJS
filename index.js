//* Bienvenida */

let textoA = 'Bienvenida a Baraco';
let nombreIngresado= prompt ('Ingrese su nombre');
console.log ('Ingrese su nombre');

let unir= textoA + nombreIngresado


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
    } else(producto == 'aruba' + talleproducto == 'large' + colorProducto == 'lila'){
        alert('sin stock')
    }
    if(producto == 'aruba'+ talleproducto == 'small' + colorProducto == 'negro'){ 
        alert('disponible');
    }else(producto == 'aruba' + talleproducto == 'medium' + colorProducto == 'negro' ){
        alert('sin stock')
    }
}
console.log("producto");


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
