'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      models.Produto.belongsTo(models.Usuario);
    }
  };
  Produto.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};