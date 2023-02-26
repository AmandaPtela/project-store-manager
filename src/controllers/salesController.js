const { validateSale } = require('../middlewares/validation');
const salesService = require('../services/saleService');

const addSale = async (request, response) => {
  const newSale = request.body;
  try {
    const result = await salesService.addSaleService(newSale);
    return response.status(201).json(result);
  } catch (error) {
    const resultValidation = await validateSale(error);
    const { status, messagem } = resultValidation;
    return response.status(status).json({ message: messagem });
  }
};

const getAllSales = async (_request, response) => {
  const allSales = await salesService.getAllSalesService();
    // console.log('ALL SALES SEM SALE_ID',allSales);
    response.status(200).json(allSales);
};

const getSaleById = async (request, response) => {
  const { id } = request.params;
  const result = await salesService.getSaleByIdService(id);
  const { status, messagem } = result;
  if (status) {
    return response.status(status).json({ message: messagem });
  }
  return response.status(200).json(result);
};

module.exports = { addSale, getSaleById, getAllSales };