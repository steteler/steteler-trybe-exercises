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
    timestamps: false,
    tableName: 'accounts',
  });

  Account.associate = ({ Profile, Comment }) => {
    Account.hasOne(Profile, {
      foreignKey: 'account_id',
      as: 'account_profile',
    });

    Account.hasMany(Comment, {
      foreignKey: 'account_id',
      as: 'account_comments',
    });
  };

  return Account;
};
