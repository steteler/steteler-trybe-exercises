module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    specialty: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    doctor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'surgeries',
    timestamps: false,
  });

  return Surgery;
};
