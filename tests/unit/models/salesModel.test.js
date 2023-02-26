const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../src/models/saleModel');
const salesMock = require('../mocks/salesMock');
const saleMock = require('../mocks/saleMock');
const saleRegistryMock = require('../mocks/salesMock');
const newSaleMock = require('../mocks/newSaleMock');
const { connection } = require('../../../src/models/connection');
const getSaleByIdMock = require('../mocks/getSaleByIdMock');

chai.use(sinonChai);

describe('SALES - Testes Camada Model', () => {
  afterEach(() => sinon.restore());
  it('Função addSaleModel deve retornar todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves([saleRegistryMock]);
    const func = await salesModel.addSaleModel();

    expect(func).to.be.deep.equal(saleRegistryMock);
  });

  // it('Função addCompleteSaleModel deve retornar todas as vendas', async () => {
  //   sinon.stub(connection, 'execute').resolves(newSaleMock);
  //   const func = await salesModel.addCompleteSaleModel(1, saleMock);

  //   expect(func).to.be.deep.equal({ id: salesMock[salesMock.length - 1].id, itemsSold: saleMock });
  // });
  
  it('Função getAllSalesModel deve retornar todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves([salesMock]);
    const func = await salesModel.getAllSalesModel();

    expect(func).to.be.deep.equal(salesMock);
  });

  it('Função getSaleByIdModel deve retornar todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves([getSaleByIdMock]);
    const func = await salesModel.getSaleByIdModel(1);

    expect(func).to.be.deep.equal(getSaleByIdMock);
  });
});