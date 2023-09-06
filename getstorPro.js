// {
//   nombre: "",
//   valor: 100,
//   codigo: ""
// }

let productos = []

// - debe listar productos
function listarProductos() {
  console.log(productos)
}

listarProductos()

// - debe crear productos (que no se repitan por el codigo del producto)
function crearProducto (nombre, valor, codigo) {
  const nuevoProducto = {
    nombre: nombre,
    valor: valor,
    codigo: codigo,
  }

  productos.push(nuevoProducto)
}
crearProducto("lapiz", 50, "abc1")
crearProducto("borrador", 150, "abc2")
listarProductos()

// - debe borrar productos
function borrarProducto(nombreProducto) {
  productos = productos.filter(p => nombreProducto != p.nombre)
}

borrarProducto("lapiz")
listarProductos()