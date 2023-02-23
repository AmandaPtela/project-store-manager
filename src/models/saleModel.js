const { connection } = require('./connection');

const addSaleModel = async () => {
  const query = 'INSERT into StoreManager.sales (date) VALUES(NOW());';
  const [result] = await connection.execute(query);
  return result;
};

const getSalesModel = async () => {
  const query = 'SELECT id FROM StoreManager.sales;';
  const [result] = await connection.execute(query);
  return result;
};

const addCompleteSaleModel = async (id, sale) => {
  const resultado = await Promise.all(sale.map(async (product) => {
    const query = `INSERT into StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES( ${id}, ${product.productId}, ${product.quantity} );`;
    const result = await connection.execute(query);
    return result;
  }));
  return resultado;
};

module.exports = { addSaleModel, addCompleteSaleModel, getSalesModel };