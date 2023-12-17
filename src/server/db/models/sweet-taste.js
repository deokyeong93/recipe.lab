'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SweetTaste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SweetTaste.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SweetTaste',
  });
  return SweetTaste;
};