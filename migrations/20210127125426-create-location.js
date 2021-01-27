'use strict';
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
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please enter name of location'
          }
        }
      },
      location_description: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notNull: {
            msg: 'Where is the room located?'
          }
        }
      },
      location_level: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Which level is the room at?'
          }
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notNull: {
            msg: 'Please enter address'
          }
        }
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
      user_id: {
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
    await queryInterface.dropTable('Locations');
  }
};