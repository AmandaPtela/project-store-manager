const { connection } = require('./connection');

const getAllModel = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const result = await connection.execute(query);
  console.log(result);
  return result;
};

module.exports = { getAllModel };