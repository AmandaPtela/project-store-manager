const { connection } = require('./connection');

const getAllModel = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  // console.log('MODEL ', result);
  return result;
};

const getByIdModel = async (id) => {
  const query = `SELECT * FROM StoreManager.products WHERE id = ${id}`;
  const [[result]] = await connection.execute(query);
  return result;
};

const addProductModel = async (product) => {
  const { name } = product;
  const query = `INSERT into StoreManager.products (name) VALUES("${name}") `;

  const [result] = await connection.execute(query);
  return result;
};

const getUpdatedModel = async (id) => {
  const selectQuery = `SELECT * FROM StoreManager.products WHERE id = ${id};`;
  const [[result]] = await connection.execute(selectQuery);
  return result;
};

const updateProductModel = async (id, product) => {
  const { name } = product;
  const query = `UPDATE StoreManager.products SET name = "${name}" WHERE id = ${id} `;
  const [result] = await connection.execute(query);
  return result;
};

const deleteProductModel = async (id) => {
  const deleteQuery = `DELETE FROM StoreManager.products WHERE id = ${id};`;
  const [{ affectedRows }] = await connection.execute(deleteQuery);
  return affectedRows;
};

module.exports = {
  getAllModel,
  getByIdModel,
  addProductModel,
  getUpdatedModel,
  updateProductModel,
  deleteProductModel,
};