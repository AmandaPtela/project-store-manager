const productsModel = require('../models/productsModel');

const getAllService = async () => {
  const products = await productsModel.getAllModel();
  // console.log('SERVICE' , products);
  return products;
};

const getByIdService = async (id) => {
  const allProducts = await getAllService();
  const arrayProducts = allProducts.map((i) => i.id === id);
  
  if (arrayProducts) {
    // console.log('inclui');
    const productsById = await productsModel.getByIdModel(id);
    return productsById;
  }
  return [];
};

const addProductService = async (product) => {
  const products = await productsModel.addProductModel(product);
  // console.log(products);
  return products;
};

module.exports = { getAllService, getByIdService, addProductService };