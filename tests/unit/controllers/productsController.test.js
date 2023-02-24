const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsController = require('../../../src/controllers/productsController');
const productsMock = require('../mocks/productsMock');
const getByIdMock = require('../mocks/getByIdMock');
const newProductMock = require('../mocks/newProductMock');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);

describe('Testes Camada Controller', () => {
  it('Função addProduct deve retornar um status 200', async () => {
    const response = {};
    const request = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAllService').resolves({ type: null, message: productsMock })

    const func = await productsController.getAll(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith({ type: null, message: productsMock })

    sinon.stub(productsController, 'getAll').resolves(productsMock);
    const getAll = await productsController.getAll();

    expect(func).to.be.equal(undefined);
    expect(getAll).to.be.equal(productsMock);
  });

  it('Função getById deve retornar o produto específico', async () => {
    sinon.stub(productsController, 'getById').resolves(getByIdMock);
    const func = await productsController.getById(1);

    expect(func).to.be.equal(getByIdMock);
  });

  it('Função addProduct deve retornar o novo produto', async () => {
    sinon.stub(productsController, 'addProduct').resolves(newProductMock);
    const func = await productsController.addProduct({ name: "Product X" });

    expect(func).to.be.equal(newProductMock);
  });
});