module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    upVoting: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    downVoting: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'comments',
    underscored: true,
    timestamps: false,
  });

  Comment.associated = ({ Accounts }) => {
    Comment.belongsTo(Accounts, {
      foreignKey: 'account_id',
      as: 'account_comments',
    });
  };

  return Comment;
};
