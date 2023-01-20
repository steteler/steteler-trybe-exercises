module.exports = (sequelize, DataTypes) => sequelize.define('Book', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
}, {
  tableName: 'books',
});
