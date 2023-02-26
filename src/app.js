const express = require('express');
const validation = require('./middlewares/validation');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:id', productsController.getById);

app.post('/products', validation.validateName, productsController.addProduct);

app.post('/sales', salesController.addSale);

app.get('/sales', salesController.getAllSales);

app.get('/sales/:id', salesController.getSaleById);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;