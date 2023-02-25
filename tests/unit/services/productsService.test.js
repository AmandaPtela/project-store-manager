const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../src/models/productsModel');
const productsMock = require('../mocks/productsMock');
const getByIdMock = require('../mocks/getByIdMock');
const newProductMock = require('../mocks/newProductMock');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);

describe('PRODUCTS - Testes Camada Service', () => {
  afterEach(() => sinon.restore());
  it('Função getAllService deve retornar todos os produtos', async () => {
    sinon.stub(productsModel, 'getAllModel').resolves(productsMock);
    const func = await productsService.getAllService();

    expect(func).to.be.equal(productsMock);
  });

  it('Função getByIdService deve retornar o produtos pedido', async () => {
    sinon.stub(productsModel, 'getByIdModel').resolves(getByIdMock);
    const func = await productsService.getByIdService(1);

    expect(func).to.be.equal(getByIdMock);
  });

  it('Função addProductService deve retornar um objeto com o novo produto', async () => {
    sinon.stub(productsModel, 'addProductModel').resolves(newProductMock);
    const func = await productsService.addProductService({name: "Product X"});

    expect(func).to.be.equal(newProductMock);
  });
})