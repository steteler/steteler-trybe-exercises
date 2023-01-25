module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    fullname: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
  }, {
    tableName: 'patients',
    timestamps: false,
  });

  Patient.associate = ({ Plan }) => {
    Patient.belongsTo(Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  };

  return Patient;
};
