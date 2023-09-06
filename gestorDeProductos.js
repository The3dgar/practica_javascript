
let productos = []

// - debe listar productos
function listarProductos () {
  console.log(productos)
}

listarProductos()

// - debe crear productos (que no se repitan por el codigo del producto)
function crearProducto( nombreDeProducto ) {
  productos.push(nombreDeProducto)
}

crearProducto("papas fritas")
listarProductos()

// - debe borrar productos


function borrarProducto(nombreDeProducto) {
  productos = productos.filter(p => p != nombreDeProducto)
}

borrarProducto("papas fritas")
listarProductos()