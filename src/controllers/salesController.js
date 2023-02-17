const salesService = require('../services/saleService');

const addSale = async (request, response) => {
  // const allSales = await salesService.addSaleService();
  const newSale = request.body;
  try {
    await salesService.addSaleRegistry()
    const result = await salesService.addSaleService(newSale);
    response.status(201).json(result);
  } catch (error) {
    response.status(error.status).json({ message: error.message });
  }
};

module.exports = { addSale };