const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../src/models/saleModel');
const salesMock = require('../mocks/salesMock');
const saleMock = require('../mocks/saleMock');
const getSaleByIdMock = require('../mocks/getSaleByIdMock');
const newSaleMock = require('../mocks/newSaleMock');
const saleRegistryMock = require('../mocks/saleRegistryMock');
const salesService = require('../../../src/services/saleService');

chai.use(sinonChai);

describe('SALES - Testes Camada Service', () => {
  afterEach(() => sinon.restore());
  
  it('Função addSaleRegistry deve retornar um ID e data da nova venda', async () => {
   sinon.stub(salesModel, 'addSaleModel').resolves(saleRegistryMock);
    const func = await salesService.addSaleRegistry();

    expect(func).to.be.deep.equal(saleRegistryMock);
  });

  // it('Função addSaleService deve retornar uma nova venda', async () => {
  //  sinon.stub(salesModel, 'addCompleteSaleModel').resolves(newSaleMock);
  //   const newSale = await salesService.addSaleService(saleMock);

  //   expect(newSale).to.be.deep.equal({ id: salesMock[salesMock.length - 1].id, itemsSold: newSaleMock });
  // });
  
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