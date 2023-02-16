const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsController = require('../../../src/controllers/productsController');
const productsMock = require('../mocks/productsMock');
const getByIdMock = require('../mocks/getByIdMock');
const newProductMock = require('../mocks/newProductMock');
// const productsService = require('../../src/services/productsService');

chai.use(sinonChai);

describe('Testes Camada Controller', () => {
  it('Função getAll deve retornar todos os produtos', async () => {
    sinon.stub(productsController, 'getAll').resolves(productsMock);
    const func = await productsController.getAll();

    expect(func).to.be.equal(productsMock);
  });

  it('Função getById deve retornar o produto específico', async () => {
    sinon.stub(productsController, 'getById').resolves(getByIdMock);
    const func = await productsController.getById(1);

    expect(func).to.be.equal(getByIdMock);
  });

  it('Função addProduct deve retornar o novo produto', async () => {
    sinon.stub(productsController, 'addProduct').resolves(newProductMock);
    const func = await productsController.addProduct({name: "Product X"});

    expect(func).to.be.equal(newProductMock);
  });
})