'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      rating: {
        allowNull: false,
        type: Sequelize.TINYINT.UNSIGNED,
        defaultValue: 0,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED
      },
      location_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED
      },
      location_slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comments: {
        allowNull: true,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Ratings');
  }
};