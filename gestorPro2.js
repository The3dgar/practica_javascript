// {
//   nombre,
//   valor,
//   codigo
// }

let productos = [];

// listar todos
function listarProductos() {
  console.log(productos);
}

// crear pero no debe permitir codigos repetidos
function crearProducto(nombre, valor, codigo) {
  const exite = productos.some((p) => p.codigo == codigo);

  if (exite) {
    console.log('producto ya existe');
    return;
  }

  productos.push({ nombre, valor, codigo });
}

// listar un producto por codigo
function listarProductoPorCodigo (codigo) {

  const productoBuscado = productos.find(p => p.codigo == codigo)

  if(!productoBuscado) {
    console.log("producto no existe")
    return
  }

  console.log( productoBuscado)

}


// borrar por codigo

function   borrarPorCodigo (codigo) {
  productos = productos.filter( p => p.codigo != codigo)
}

listarProductos();
crearProducto('lapiz', 50, 'abc1');
crearProducto('lapiz', 50, 'abc1');
crearProducto('borrador', 120, 'abc2');
listarProductos();

listarProductoPorCodigo("abc3")

borrarPorCodigo("abc1")
listarProductos()
listarProductoPorCodigo("abc1")

/**
 * .push = inserta dentro del array
 * .find = buscar dentro del array
 * .some = ve si existe dentro del array
 * .filter = filtra dentro del array
 */