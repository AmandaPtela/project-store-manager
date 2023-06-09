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

const updateProductService = async (id, product) => {
  const allProducts = await getAllService();
  const schemaId = id > allProducts.length;

  if (schemaId) return ({ status: 404, messagem: 'Product not found' });
  await productsModel.updateProductModel(id, product);
  const newProduct = await productsModel.getUpdatedModel(id);
  return { status: 200, messagem: newProduct };
};

const deleteProductService = async (id) => {
  const allProducts = await getAllService();
  const schemaId = id > allProducts.length;

  if (schemaId) return ({ status: 404, messagem: 'Product not found' });
  await productsModel.deleteProductModel(id);
  return ({ status: 204 });
};

module.exports = {
  getAllService,
  getByIdService,
  addProductService,
  updateProductService,
  deleteProductService,
};