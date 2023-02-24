const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../src/models/productsModel');
const productsMock = require('../mocks/productsMock');
// const getByIdMock = require('../mocks/getByIdMock');
// const newProductMock = require('../mocks/newProductMock');
// const productsService = require('../../src/services/productsService');

chai.use(sinonChai);

describe('Testes Camada Service', () => {
  it('Função getAllService deve retornar todos os produtos', async () => {
    sinon.stub(productsModel, 'getAllModel').resolves(productsMock);
    const func = await productsModel.getAllModel();

    expect(func).to.be.equal(productsMock);
  });
/*
  it('Função getByIdService deve retornar o produto pedido', async () => {
    sinon.stub(productsService, 'getByIdService').resolves(getByIdMock);
    const func = await productsService.getByIdService();

    expect(func).to.be.equal(getByIdMock);
  });

  it('Função addProduct deve retornar um objeto com o corpo da requisição', async () => {
    sinon.stub(productsService, 'addProductService').resolves(newProductMock);
    const func = await productsService.addProductService({name: "Product X"});

    expect(typeof func).to.be.equal('object');
  });*/
})