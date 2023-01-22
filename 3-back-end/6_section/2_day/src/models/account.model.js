module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
    timestamp: false,
    tableName: 'accounts',
  });

  Account.associate = ({ Profile }) => {
    Account.hasOne(Profile, {
      foreignKey: 'account_id',
      as: 'account_profile',
    });
  };

  return Account;
};
