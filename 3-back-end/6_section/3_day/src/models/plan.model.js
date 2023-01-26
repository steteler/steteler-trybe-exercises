module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    coverage: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'plans',
    timestamps: false,
  });

  Plan.associate = ({ Patient }) => {
    Plan.hasMany(Patient, {
      foreignKey: 'plan_id',
      as: 'patients',
    });
  };

  return Plan;
};
