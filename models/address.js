"use strict";
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      qbId: {
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING
      },
      city: {
        allowNull: true,
        type: DataTypes.STRING
      },
      state: {
        allowNull: true,
        type: DataTypes.STRING
      },
      zip: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {}
  );

  Address.associate = models => {
    // Company.hasMany(models.UserCompany, {});
    // Address.belongsToMany(models.User, {
    //   through: models.UserCompany
    // });
  };

  return Address;
};
