const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../src/models/saleModel');
const salesMock = require('../mocks/salesMock');
const getSaleByIdMock = require('../mocks/getSaleByIdMock');
const newProductMock = require('../mocks/newProductMock');
const salesService = require('../../../src/services/saleService');

chai.use(sinonChai);

describe('SALES - Testes Camada Service', () => {
  afterEach(() => sinon.restore());
  it('Função getAllSalesService deve retornar todas as vendas', async () => {
    sinon.stub(salesModel, 'getAllSalesModel').resolves(salesMock);
    const func = await salesService.getAllSalesService();

    expect(func).to.be.equal(salesMock);
  });

  it('Função getSaleByIdService deve retornar uma venda', async () => {
    sinon.stub(salesModel, 'getSaleByIdModel').resolves(getSaleByIdMock);
    const func = await salesService.getSaleByIdService(1);

    expect(func).to.be.equal(getSaleByIdMock);
  });
});