module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {}, {
    tableName: 'patient_surgeries',
    timestamps: false,
  });

  PatientSurgery.associate = ({ Patient, Surgery }) => {
    Surgery.belongsToMany(Patient, {
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      as: 'patients',
    });

    Patient.belongsToMany(Surgery, {
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      as: 'surgeries',
    });
  };

  return PatientSurgery;
};
