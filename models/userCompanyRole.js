"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserCompanyRole = sequelize.define(
    "UserCompanyRole",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      }
      // userRoleId: { type: DataTypes.INTEGER, allowNull: true }
    },
    {}
  );

  UserCompanyRole.associate = function(models) {
    // UserCompanyRole.belongsToMany(models.Company, {
    //   through: models.UserCompany
    // });
  };

  return UserCompanyRole;
};
