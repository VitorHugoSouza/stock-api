"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
        models.Usuario.hasMany(models.Produto);
    }
  }

  Usuario.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "E-mail inválido",
          },
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );

  return Usuario;
};
