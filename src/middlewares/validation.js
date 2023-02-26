const validateName = (request, response, next) => {
  const { name } = request.body;
  if (!name) return response.status(400).json({ message: '"name" is required' });
  if (name && name.length < 5) {
    return response.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const validateSale = async (error) => {
  // console.log('MIDLEWAAAAAAAAARE', error);
  const tipo = await error.message;
  const NF = { status: 404, messagem: 'Product not found' };
  const Min = { status: 422, messagem: error.message };
  const Req = { status: 400, messagem: error.message };
  if (tipo.includes('required')) {
    return Req;
  }
  if (tipo.includes('greater')) {
    return Min;
  }
  if (tipo.includes('less than or equal')) {
    return NF;
  }
  return 'nada';
};
module.exports = { validateName, validateSale };