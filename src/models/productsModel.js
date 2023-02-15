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
  console.log('MODEL ', result);
  return result;
};

module.exports = { getAllModel, getByIdModel };