'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      location_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      location_level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.TEXT
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(12,9),
        validate: {
          min: -90,
          max: 90
        }
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(12,9),
        validate: {
          min: -180,
          max: 180
        }
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};