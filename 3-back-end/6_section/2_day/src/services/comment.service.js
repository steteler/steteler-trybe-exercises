const { Comment } = require('../models/index');

async function getCommentsByAccountId(id) {
  const comments = await Comment.findAll({
    where: { account_id: id },
  });
  return comments;
}

module.exports = {
  getCommentsByAccountId,
};
