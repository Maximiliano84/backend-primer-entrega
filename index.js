class ProductManager {
  constructor(products = []) {
    this.products = products;
    this.lastId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Valido todos los campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    // Valido que el code no se repita
    if (this.products.some((product) => product.code === code)) {
      console.error(`Ya existe un producto con el código "${code}"`);
      return;
    }

    // Incrementar ID y pushear el nuevo producto al array
    const newProduct = {
      id: ++this.lastId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    console.log(newProduct)
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    
    if (product) {
      return product;
    } else {
      console.error(`Not Found`);
      return null;
    }
  }

  getProducts() {
    console.log(this.products)
    return this.products;
  }
}

//Casos de prueba
const productManager = new ProductManager();

//Agrego productos
productManager.addProduct(
  "Producto 1",
  "una descripción del producto",
  299,
  "ruta/de/la/imagen.jpg",
  "123",
  25
);
productManager.addProduct(
  "Producto 2",
  "Otra descripción del producto",
  399,
  "./img.jpg",
  "456",
  50
  );
productManager.addProduct(
  "Producto 3",
  "Una nueva descripción del producto",
  399,
  "./img.jpg",
  "789",
  75
  );
  //Valido un producto con el mismo codigo
productManager.addProduct(
  "Producto 2",
  "Otra descripción del producto",
  399,
  "./img.jpg",
  "123",
  50
);

 //Valido un ID inexistente
productManager.getProductById(5);

productManager.getProducts()










