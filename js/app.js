const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


// Mostrar el carrito de la compra y listar todos los productos.
function printItem(item) {
    console.log("Id: " + item.id);
    console.log("Nombre: " + item.name);
    console.log("Precio: " + item.price);
    console.log("Cantidad: " + item.count);
    console.log("Premium: " + item.premium);
    console.log("------------");
}


// Eliminar el producto con id 54657 del carrito de la compra.

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
        carrito.splice(i, 1);
    }
    printItem(carrito[i]);
    printWeb(carrito[i])
}
// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

var total = 0;
for (item of carrito) {
    total += item.price * item.count;
}
console.log("Total: " + total);

// Aplicar un descuento del 5% si la compra es mayor de 100 €.

let totalDescuento = total;
if (total >= 100) {
    totalDescuento = total * 0.95;
    console.log("Total con descuento (5%):", totalDescuento);
}
console.log("------------");

// Filtrar por los productos que sean prime.

function printPremium() {
    console.log("PRODUCTOS PREMIUM:");
    for (item of carrito) {
        if (item.premium) {
            printItem(item);
        }

    }
}
printPremium();

// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", 
// si no "Este pedido tiene gastos de envío".

let freeShipping = false;

function isfreeShipping() {
    for (item of carrito) {
        if (item.premium) {
            freeShipping = true;
        }
    }
    if (freeShipping = item.premium && freeShipping) {
        console.log("Pedido sin gastos de envío");
        document.write("<h4>"+ "Pedido sin gastos de envío" + "</h4>");
    } else {
        console.log("Este pedido tiene gastos de envío");
        document.write("<h4>"+ "Este pedido tiene gastos de envío" + "</h4>");
    }
}
isfreeShipping();

// Mostrar el carrito en un listado de html básico.

function printWeb(item) {
    document.write("<ul>");
    document.write("<li>" + "Id: " + item.id + "</li>");
    document.write("<li>" + "Nombre: " + item.name + "</li>");
    document.write("<li>" + "Precio: " + item.price + "</li>");
    document.write("<li>" + "Cantidad: " + item.count + "</li>");
    document.write("<li>" + "Premium: " + item.premium + "</li>");
    document.write("</ul>");
    document.write("-----------------------------------------");
}

document.write("<h3>"+ "Total con descuento (5%): " +  totalDescuento + "</h3>");
