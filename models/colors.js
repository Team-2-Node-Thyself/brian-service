'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Colors.belongsTo(models.Product, {
        foreignKey: 'prod_id'
      })
    }
  };
  Colors.init({
    green: DataTypes.INTEGER,
    blue: DataTypes.INTEGER,
    red: DataTypes.INTEGER,
    yellow: DataTypes.INTEGER,
    purple: DataTypes.INTEGER,
    prod_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Colors',
  });
  return Colors;
};