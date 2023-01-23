module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'profiles',
  });

  Profile.associate = ({ Account }) => {
    Profile.belongsTo(Account, {
      foreignKey: 'account_id',
      as: 'account_profile',
    });
  };

  return Profile;
};
