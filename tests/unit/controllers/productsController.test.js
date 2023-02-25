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

describe('PRODUCTS - Testes Camada Controller', () => {
  const response = {};
  const request = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().resolves();
  });
  afterEach(() => sinon.restore());
  it('Função getAll deve retornar um status 200 e todos os produtos', async () => {
    sinon.stub(productsService, 'getAllService').resolves(productsMock);

    await productsController.getAll(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWithExactly(productsMock);
  });

  it('Função getById deve retornar o produto específico', async () => {
    sinon.stub(productsController, 'getById').resolves(getByIdMock);
    const func = await productsController.getById(1);

    expect(func).to.be.equal(getByIdMock);
  });

  it('Função addProduct deve retornar um status 201 e o novo produto', async () => {
    const allProducts = await productsService.getAllService();
    request.body = { name: 'productX' }
    const mockResult = { id: allProducts.length + 1, ...request.body };
    
    sinon.stub(productsService, 'addProductService').resolves(mockResult);
    
    await productsController.addProduct(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWithExactly({ id: allProducts.length + 1, name: 'productX' });
  });
});