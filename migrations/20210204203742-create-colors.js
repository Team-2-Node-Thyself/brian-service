'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      green: {
        type: Sequelize.INTEGER
      },
      blue: {
        type: Sequelize.INTEGER
      },
      red: {
        type: Sequelize.INTEGER
      },
      yellow: {
        type: Sequelize.INTEGER
      },
      purple: {
        type: Sequelize.INTEGER
      },
      prod_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
          as: 'prod_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Colors');
  }
};