"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    "Vendor",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      qbId: DataTypes.INTEGER,
      Active: DataTypes.BOOLEAN,
      Balance: DataTypes.DECIMAL(10, 2),
      CustomerName: DataTypes.STRING,
      SyncToken: DataTypes.INTEGER
    },
    {}
  );
  Vendor.associate = function(models) {
    Vendor.belongsTo(models.Address, {});
  };
  return Vendor;
};
