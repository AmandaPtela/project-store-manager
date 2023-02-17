const Joi = require('joi');
const salesModel = require('../models/saleModel');
const productsModel = require('../models/productsModel');

const addSaleRegistry = async () => {
  const result = await salesModel.addSaleModel();
  return result;
}

const addSaleService = async (sale) => {
  const allSales = await salesModel.getSalesModel();
  const allProducts = await productsModel.getAllModel();
  const nameSchema =  Joi.object({
    productId: Joi.number().integer().min(1).max(allProducts.length).required().label('productId'),
    quantity: Joi.number().integer().min(1).required().label('quantity'),
  }).messages({
    'any.required': '{{#label}} is required',
    'number.min': '{{#label}} must be greater than or equal to 1',
    'number.max': '{{#label} Product not found',
  });

  const arraySchema = Joi.array().items(nameSchema);
  const { error } = arraySchema.validate(sale);
  console.log(error);
  if (error) {
    if (error.type === 'any.required') throw { status: 400, message: error.message };
    if (error.type === 'number.min') throw { status: 422, message: error.message };
    if (error.type === 'number.max') throw { status: 404, message: error.message };
  }
  await Promise.all(allSales.map(async (sales) => { await salesModel.addCompleteSaleModel(sales.id, sale); }));
  const ultimo =allSales[allSales.length - 1].id;
  console.log(ultimo);
  return {id: ultimo, itemsSold: sale};
};

module.exports = { addSaleService, addSaleRegistry };