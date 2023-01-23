const services = require('../services/index');

async function getCommentsByAccountId(req, res) {
  const { id } = req.params;

  const comments = await services.comment.getCommentsByAccountId(id);
  return res.status(200).json(comments);
}

module.exports = {
  getCommentsByAccountId,
};
