'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Produto.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};