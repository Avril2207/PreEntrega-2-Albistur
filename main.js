//PRE-ENTREGA 2 
//se tiene un arreglo de productos con su respectivo id. Se le muestra al usuario dicho arreglo y
// luego se le pide que ingrese el id del producto de su preferencia, una vez agregado el producto 
//a un array vacio se le pregunta al usuario si tiene mas productos,de ser asi se le piden los productos
//se hace una suma del total, de no ser asi se muestra el valor de ese producto. En caso de que el total 
//supere los $1000 se realiza un descuento del 15% de descuento.


 // Array de productos
 let productos = [
    { id: 1, name:"Torta láminas de chocolate bicolor", precio: 105},
    { id: 2, name:"Tarta de frutos rojos", precio: 100},
    { id: 3, name:"Tarta de frutos rojos con crumble", precio: 90},
    { id: 4, name:"Brownie de chocolate", precio: 55},
    { id: 5, name:"Tarta red velvet con crema de queso", precio: 170},
    { id: 6, name:"Pasta frola", precio: 70}
  ];
  
  // FUNCIÓN PARA ENCONTRAR EL ID
  function buscarProducto(id) {
    for (let i = 0; i < productos.length; i++){
      let producto = productos[i];
      if (producto.id === id){
        return producto;
      }
    }
    //return productos.find(producto => producto.id === id); ESTO LO COMENTE YA QUE LO USABA ANTES
    //PERO USE UN .LENGTH DEBIDO A LA CONSIGNA.
  };
  //FUNCIÓN PARA PEDIR MÁS PRODUCTOS Y CALCULAR EL TOTAL

  function pedirMasProductos() {
    while (true) {
      let masProductos = prompt("¿Tiene más productos? (si/no)").toLowerCase();
  
      switch (masProductos) {
        case "si":
          let nuevoId = Number(prompt("Ingrese el ID del nuevo producto:"));
          let nuevoProducto = buscarProducto(nuevoId);
  
          if (nuevoProducto) {
            productosEnLista.push(nuevoProducto);
            alert(`Producto agregado: ${nuevoProducto.name} - Precio: $${nuevoProducto.precio}`);
          } else {
            alert("ID de producto no encontrado. Intente nuevamente.");
          }
          break;
        case "no":
          return productosEnLista.reduce((total, producto) => total + producto.precio, 0);
        default:
          alert("Por favor, responda con 'si' o 'no'.");
      }
    }
  }

  //COMIENZO 

let productosEnLista = []; //ARRAY DONDE SE VAN A IR ACUMULANDO LOS PRODUCTOS QUE EL USUARIO SELECCIONE 

  if (true){
    productos.forEach((producto)=>{
      alert(`Bienvenido, los productos disponibles son:
      id: ${producto.id},
      nombre: ${producto.name},
      precio: $${producto.precio}`)
    }); //MUESTRA DE LOS PRODUCTOS DISPONIBLES

    let idIngresado = Number(prompt(`Ingrese el id de su producto: `));
   

    while(isNaN(idIngresado)|| !buscarProducto(idIngresado)){
      alert ("Id no encontrado, vuelva a intentar.");
      idIngresado = Number(prompt(`Ingrese el id de su producto: `));
    }
    let idEncontrado = buscarProducto(idIngresado);
    
    if (idEncontrado){ //EN CASO DE ENCONTRARSE EL ID, EL PRODUCTO SE AGREGA A UN ARRAY VACIO
      productosEnLista.push(idEncontrado);
      alert(`Producto agregado: ${idEncontrado.name} - Precio: $${idEncontrado.precio}`);
      let valorFinal = pedirMasProductos();

      if(valorFinal > 1000){ //EN CASO DE QUE LA SUMA TOTAL DEL PRECIO DE LOS PRODUCTOS SUPERE LOS $1000, AL USUARIO SE LE REALIZA UN DESCUENTO DEL 15%
        let descuento = valorFinal * 0.15;
        let precioConDescuento = valorFinal - descuento;
        alert(`El precio total es de: $${precioConDescuento}, con un descuento del 15%. Gracias por su compra!`);
      }else{
        alert(`El precio total es de $${valorFinal}. Gracias por su compra!`);
      }
    };
  }