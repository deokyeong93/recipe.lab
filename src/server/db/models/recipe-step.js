'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeStep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeStep.init({
    recipe_id: DataTypes.INTEGER,
    step_number: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RecipeStep',
  });
  return RecipeStep;
};