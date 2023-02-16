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
  if (!productsById) { return response.status(404).json({ message: 'Product not found' }); }
  if (productsById) { return response.status(200).json(productsById); }
};

const addProduct = async (request, response) => {
  const allProducts = await productsService.getAllService();
  const newProduct = request.body;
  await productsService.addProductService(newProduct);
  response.status(201).json({ id: allProducts.length + 1, name: newProduct.name });
};

module.exports = {
  getAll,
  getById,
  addProduct,
};