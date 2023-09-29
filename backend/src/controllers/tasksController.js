const getAll = (request, response) => {
  return response.status(200).json({ Message: 'controller está funcionando!'});
};

module.exports = {
  getAll
};