// Iniciando
const productsService = require('../services/productsService');

const getAll = async (_request, response) => {
  const products = await productsService.getAllService();
  // console.log(products);
  response.status(200).json(products);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const productsById = await productsService.getByIdService(id);
  if (productsById) { return response.status(200).json(productsById); }
  if (!productsById) { return response.status(404).json({ message: 'Product not found' }); }
};

const addProduct = async (request, response) => {
  const allProducts = await productsService.getAllService();
  const newProduct = request.body;
  await productsService.addProductService(newProduct);
  response.status(201).json({ id: allProducts.length + 1, name: newProduct.name });
};

const updateProduct = async (request, response) => {
    const { id } = request.params;
    const product = request.body;
    const result = await productsService.updateProductService(id, product);
    if (result.status !== 200) {  
      const { status, messagem } = result;
      return response.status(status).json({ message: messagem });
    }
  return response.status(200).json(result.messagem);
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  const result = await productsService.deleteProductService(id);
  if (result.status !== 204) {  
    const { status, messagem } = result;
    return response.status(status).json({ message: messagem });
  }
  response.status(result.status).send();
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};