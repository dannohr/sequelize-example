"use strict";
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "Session",
    {
      sid: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      expires: {
        type: DataTypes.DATE
      },
      data: {
        type: DataTypes.TEXT
      }
    },
    {
      indexes: [
        {
          name: "expires_index",
          method: "BTREE",
          fields: ["expires"]
        },
        {
          name: "createdAt_index",
          method: "BTREE",
          fields: ["createdAt"]
        },
        {
          name: "updatedAt_index",
          method: "BTREE",
          fields: ["updatedAt"]
        }
      ]
    }
  );
};
