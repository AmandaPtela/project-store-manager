const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/saleService');
// const salesMock = require('../mocks/salesMock');
// const getByIdMock = require('../mocks/getByIdMock');
const newsaleMock = require('../mocks/newsaleMock');
// const productsService = require('../../src/services/productsService');

chai.use(sinonChai);

describe('Testes Camada Controller de SALES', () => {
  it('Função addSale deve retornar uma nova venda', async () => {
    sinon.stub(salesController, 'addSale').resolves(newsaleMock);
    sinon.stub(salesService, 'addSaleService').resolves(newsaleMock);

    const func = await salesController.addSale([{
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }]);

    expect(func).to.be.equal(newsaleMock);
  });
});