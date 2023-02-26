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

const getAllSalesModel = async () => {
  const query = `SELECT salesPRod.sale_id as saleId, sales.date,
    salesPRod.product_id as productId, salesPRod.quantity 
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS salesPRod ON sales.id = salesPRod.sale_id
    ORDER BY sale_id, product_id; `;
  const [result] = await connection.execute(query);
  return result;
};

const getSaleByIdModel = async (id) => {
  const query = `SELECT sales.date, salesPRod.product_id as productId, salesPRod.quantity 
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS salesPRod ON sales.id = salesPRod.sale_id
    WHERE sale_id = ${id}`;
  const [result] = await connection.execute(query);
  return result;
};

module.exports = {
  addSaleModel,
  addCompleteSaleModel,
  getSalesModel,
  getSaleByIdModel,
  getAllSalesModel,
};