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

module.exports = {
  getAll,
  getById,
};