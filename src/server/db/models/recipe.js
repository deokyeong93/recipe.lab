"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      cook_method: DataTypes.STRING,
      food_kind: DataTypes.STRING,
      info_weight: DataTypes.STRING,
      info_calorie: DataTypes.INTEGER,
      carbohydrate: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      natrium: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  )
  return Recipe
}
