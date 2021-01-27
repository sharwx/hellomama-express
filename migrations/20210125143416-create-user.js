'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notNull: {
            msg: 'Please enter your username'
          }
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notNull: {
            msg: 'Please enter your email'
          }
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please enter your password'
          }
        }
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
    await queryInterface.dropTable('Users');
  }
};