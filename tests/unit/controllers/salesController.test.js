const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/saleService');
const salesMock = require('../mocks/salesMock');
const getSaleByIdMock = require('../mocks/getSaleByIdMock');
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

    const add = await salesController.addSale(request, response)
    if (typeof add === 'object') {
      expect(response.status).not.to.be.calledWith(201);
    }
      expect(response.status).to.be.calledWith(201);
      expect(response.json).to.have.been.calledWithExactly(newsaleMock);
  });

  it('Função getAllSales deve retornar todas as vendas', async () => {
    await sinon.stub(salesService, 'getAllSalesService').resolves(salesMock);

    await salesController.getAllSales(request, response)
    expect(response.status).to.be.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(salesMock);
  });

  it('Função getSaleByIdService deve retornar todas as vendas', async () => {
    await sinon.stub(salesService, 'getSaleByIdService').resolves(getSaleByIdMock);

    const req = { params: { id: 1 } };
    await salesController.getSaleById(req, response)
    expect(response.status).to.be.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(getSaleByIdMock);
  });

    it('Função getSaleByIdService deve retornar erro', async () => {
    await sinon.stub(salesService, 'getSaleByIdService').resolves(getSaleByIdMock);

    const req = { params: { id: 1 } };
    await salesController.getSaleById(req, response)
    expect(response.status).to.be.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(getSaleByIdMock);
  });
});