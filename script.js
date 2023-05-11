
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// Define el ID del producto seleccionado
var productId = obtenerIdProductoSeleccionado();

// Obtiene los datos del producto seleccionado a través de un API o una base de datos
var productoSeleccionado = obtenerDatosProducto(productId);

// Inserta la información del producto seleccionado en el HTML
var detalleProducto = document.querySelector("#prodetails");

detalleProducto.innerHTML = `
  <h2>${productoSeleccionado.nombre}</h2>
  <img src="${productoSeleccionado.imagen}">
  <p>${productoSeleccionado.descripcion}</p>
  <p>Precio: ${productoSeleccionado.precio}</p>
  <button onclick="añadirAlCarrito(${productId})">Añadir al carrito</button>
`;

// Define una función para añadir el producto al carrito
function añadirAlCarrito(idProducto) {
  // Agrega el producto seleccionado al carrito (usando un API o una base de datos)
  // ...
  console.log(`Producto ${idProducto} añadido al carrito`);
}


