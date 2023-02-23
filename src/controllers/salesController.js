const { validateSale } = require('../middlewares/validation');
const salesService = require('../services/saleService');

const addSale = async (request, response, next) => {
  const newSale = request.body;
  try {
    const result = await salesService.addSaleService(newSale);
    response.status(201).json(result);
  } catch (error) {
    const resultValidation = await validateSale(error);
    next();
    console.log(resultValidation);
    const { status, messagem } = resultValidation;
    return response.status(status).json({ message: messagem });
  }
};

module.exports = { addSale };