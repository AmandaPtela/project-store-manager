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

const getAllSalesService = async () => {
  const allSales = await salesModel.getAllSalesModel();
  return allSales;
};

const getSaleByIdService = async (id) => {
  const saleById = await salesModel.getSaleByIdModel(id);
  console.log(saleById);

  if (saleById.length === 0) return ({ status: 404, messagem: 'Sale not found' });
  return (saleById);
};

module.exports = {
  addSaleService,
  addSaleRegistry,
  getSaleByIdService,
  getAllSalesService,
};