const productsModel = require('../models/productsModel');

const getAllService = async () => {
  const products = await productsModel.getAllModel();
  console.log(products);
  return products;
};

module.exports = { getAllService };