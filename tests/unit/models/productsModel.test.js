const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsMock = require('../mocks/productsMock');
const newProductMock = require('../mocks/newProductMock');
const getByIdMock = require('../mocks/getByIdMock');
const productsModel = require('../../../src/models/productsModel');
const { connection } = require('../../../src/models/connection');

chai.use(sinonChai);

describe('PRODUCTS - Testes Camada Model', () => {
  afterEach(() => sinon.restore());
  it('Função getAllModel deve retornar um array de objetos', async () => {
     sinon.stub(connection, 'execute').resolves([productsMock]);
     const func = await productsModel.getAllModel();

     expect(func).to.be.deep.equal(productsMock);
   });
  it('Função getAllByIdModel deve retornar um array com o produto pedido', async () => {
    sinon.stub(connection, 'execute').resolves([[getByIdMock]]);
    const func = await productsModel.getByIdModel(1);
    expect(func).to.be.deep.equal(getByIdMock);
  });
  
  it('Função addProductModel deve retornar um array com o novo produto', async () => {
    sinon.stub(connection, 'execute').resolves([newProductMock]);
    const func = await productsModel.addProductModel({ name: 'productX'});
    expect(func).to.be.deep.equal(newProductMock);
   });
 });