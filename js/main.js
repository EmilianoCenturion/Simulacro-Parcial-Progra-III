const librosTienda = [
    {id:1, nombre:"arandano", precio: 150, ruta_img: "img/arandano.jpg"},
    {id:2, nombre:"banana", precio: 350, ruta_img: "img/banana.jpg"},
    {id:3, nombre:"frambuesa", precio: 250, ruta_img: "img/frambuesa.png"},
    {id:4, nombre:"frutilla", precio: 50, ruta_img: "img/frutilla.jpg"},
    {id:5, nombre:"kiwi", precio: 500, ruta_img: "img/kiwi.jpg"},
    {id:6, nombre:"mandarina", precio: 980, ruta_img: "img/mandarina.jpg"}, 
    {id:7, nombre:"manzana", precio: 980, ruta_img: "img/manzana.jpg"}, 
    {id:8, nombre:"naranja", precio: 980, ruta_img: "img/naranja.jpg"}, 
    {id:9, nombre:"pera", precio: 980, ruta_img: "img/pera.jpg"}, 
    {id:10, nombre:"anana", precio: 980, ruta_img: "img/anana.jpg"}, 
    {id:11, nombre:"pomelo-amarillo", precio: 980, ruta_img: "img/pomelo-amarillo.jpg"}, 
    {id:12, nombre:"pomelo-rojo", precio: 980, ruta_img: "img/pomelo-rojo.jpg"}, 
    {id:12, nombre:"sandia", precio: 980, ruta_img: "img/sandia.jpg"} 
];



/*
const boton = document.getElementById("boton");

console.log(librosTienda[2]);
console.log(librosTienda[3].precio);


 boton.addEventListener("click", mostrarLista);
 let htmlProductos = "<ul>";
librosTienda.forEach(libro => {
        // console.log(libro.nombre);

    htmlProductos += `<li>${libro.nombre} /  ${libro.precio}u$s</li>`;
});
htmlProductos += "</ul>";
console.log(htmlProductos);
*/

/* 
  variables globales
*/

const carrito = []

/* 
Variables del DOM
*/

const barraBusqueda = document.getElementById("barra-busqueda");

const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("contenedor-carrito");

const formAgregar = document.getElementById("form-agregar");

const inputNombre = document.getElementById("input-nombre");

const inputPrecio = document.getElementById("input-precio");

const inputImg = document.getElementById("input-img");

const BttnOrdenar = document.getElementById("bttn-ordenar")

const carritoCantidad = document.getElementById("carrito-cantidad")

const botonVaciar = document.getElementById("boton-vaciar")
/* 
Escuchadores de eventos 
*/

botonVaciar.addEventListener("click", vaciarCarrito)

barraBusqueda.addEventListener("keyup", filtrarProducto)

/*
Funciones  
*/

function mostrarLista(array){
    let htmlProductos = "";
    array.forEach(libro=>{ 
        htmlProductos += `
        <div class="card-producto">
            <img class ="img-card" src="${libro.ruta_img}" alt="${libro.nombre}">
            <h3 class = "text-card">${libro.nombre}</h3>
            <p class= "">${libro.precio}$</p>
            <a class="bttn-card" onclick="agregarACarrito(${libro.id})">Agregar al carrito</a>
        </div>
        `
    })
    
    contenedorProductos.innerHTML = htmlProductos;
};

function mostrarCarrito() {
    let htmlCarrito = "<ul class=lista-carrito>";
    carrito.forEach(libroCarrito =>{
        htmlCarrito += 
        `<li class="bloque-item">
            <img src="${libroCarrito.ruta_img}" alt="${libroCarrito.nombre}">
            <p class="nombre-item">${libroCarrito.nombre} - ${libroCarrito.precio}</p>
            <button onclick="eliminarDelCarrito(${libroCarrito.id})"class="boton-eliminar">Eliminar</button>
        </li>
        `
    })
    htmlCarrito += "</ul>"

    console.log(htmlCarrito);

    contenedorCarrito.innerHTML = htmlCarrito;
    carritoCantidad.innerHTML = `Carrito: ${carrito.length}`
}

function filtrarProducto() {
    let valorBusqueda = barraBusqueda.value.toLowerCase();

    console.log(valorBusqueda);
    
    let productoFiltrado = librosTienda.filter(libro =>  libro.nombre.toLowerCase().includes(valorBusqueda))
    console.log(productoFiltrado);
    
    mostrarLista(productoFiltrado);
}

function ordenarLibros(){
    const librosOrdenados = [...librosTienda];

    librosOrdenados.sort((a, b) =>
        (a.nombre.toLowerCase() > b.nombre.toLowerCase()) -
        (a.nombre.toLowerCase() < b.nombre.toLowerCase())
    );

    mostrarLista(librosOrdenados);
}

function eliminarDelCarrito(libroCarritoId) {
    const index = carrito.findIndex(libro => libro.id == libroCarritoId);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
    mostrarCarrito(carrito);
}

function vaciarCarrito() {
    carrito.length = 0;
    mostrarCarrito();
}

function agregarACarrito(idLibro) {
    carrito.push(librosTienda.find(libro => libro.id == idLibro))
    mostrarCarrito(carrito)

}

function init(){
    mostrarLista(librosTienda);
    filtrarProducto()
}

init();