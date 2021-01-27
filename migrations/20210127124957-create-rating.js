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
        validate: {
          notNull: {
            msg: 'Please rate'
          }
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED
      },
      location_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED
      },
      comments: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Ratings');
  }
};