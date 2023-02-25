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

describe(' SALES - Testes Camada Controller de SALES', () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().resolves();
  });

  afterEach(() => sinon.restore());

  it('Função addSale deve retornar uma nova venda', async () => {

    await sinon.stub(salesService, 'addSaleService').resolves(newsaleMock);

    await salesController.addSale(request, response)
    expect(response.status).to.be.calledWith(201);
    expect(response.json).to.have.been.calledWithExactly(newsaleMock);
  });
});