const Joi = require('joi');
const salesModel = require('../models/saleModel');
const productsModel = require('../models/productsModel');

const addSaleRegistry = async () => {
  const result = await salesModel.addSaleModel();
  return result;
};

const addSaleService = async (sale) => {
  const allProducts = await productsModel.getAllModel();
  const limit = allProducts.length;
  const nameSchema = Joi.object({ productId: Joi.number().integer().min(1).max(limit)
      .required()
      .label('productId'),
    quantity: Joi.number().integer().min(1)
      .required()
      .label('quantity'),
  });
  const arraySchema = Joi.array().items(nameSchema);
  const { error } = arraySchema.validate(sale);
  if (error) throw new Error(error.message);
  await addSaleRegistry();
  const allSales = await salesModel.getSalesModel();
  await Promise.all(allSales.map(async (sal) => {
    await salesModel.addCompleteSaleModel(sal.id, sale);
  }));
  return { id: allSales[allSales.length - 1].id, itemsSold: sale };
};

module.exports = { addSaleService, addSaleRegistry };