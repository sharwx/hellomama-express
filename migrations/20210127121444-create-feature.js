'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Features', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      changing_station: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      sink: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      hot_water_dispenser: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      power_point: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      lockable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      location_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Features');
  }
};