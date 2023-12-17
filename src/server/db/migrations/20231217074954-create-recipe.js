"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      cook_method: {
        type: Sequelize.STRING,
      },
      food_kind: {
        type: Sequelize.STRING,
      },
      info_weight: {
        type: Sequelize.STRING,
      },
      info_calorie: {
        type: Sequelize.INTEGER,
      },
      carbohydrate: {
        type: Sequelize.INTEGER,
      },
      protein: {
        type: Sequelize.INTEGER,
      },
      fat: {
        type: Sequelize.INTEGER,
      },
      natrium: {
        type: Sequelize.INTEGER,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      ingredients: {
        type: Sequelize.STRING(500),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Recipes")
  },
}
