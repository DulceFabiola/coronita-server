const Product = require("./../models/Product");

//CREATE PRODUCT
exports.createProduct = async (req, res) => {
  const {
    sku,
    name,
    description,
    amount,
    publicAmount,
    mainImageUrl,
    imageUrls,
    brand,
    category,
    presentation,
    inventory,
  } = req.body;

  try {
    const newProduct = await Product.create({
      sku,
      name,
      description,
      amount,
      publicAmount,
      mainImageUrl,
      imageUrls,
      brand,
      category,
      presentation,
      inventory,
    });

    res.json({
      msg: "Producto creado exitosamente",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error creando el producto",
      error: error,
    });
  }
};

//READ PRODUCTS
exports.readAllProducts = async (req, res) => {
  try {
    const { search } = req.body;
    let products;
    if (!search) {
      products = await Product.find({});
    } else {
      let regex = new RegExp(search, "i");

      products = await Product.find({
        $and: [
          {
            $or: [
              { name: regex },
              { description: regex },
              { brand: regex },
              { category: regex },
            ],
          },
        ],
      });
    }

    res.json({
      message: "Productos obtenidos con éxito",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error obteniendo los productos",
      error: error,
    });
  }
};

//READ ONE PRODUCT
exports.readOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json({
      message: "Producto obtenido con éxito",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};
