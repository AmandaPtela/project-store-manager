// Iniciandoconst productsService = require('../services/productsService');

const getAll = async (_request, response) => {
  const products = await productsService.getAllService();
  response.status(200).json(products)
  console.log('products');
}

/* const getById = (request, response) => {
  const id = request.params;
  console.log(id);
  const productsById = getAllService(requisicao);
  response.status(200).json(productsById)
} */

module.exports = {
  getAll,
  //getById,
}