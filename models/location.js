'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Location.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED
    },
    location_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    slug: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    location_description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    location_level: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    photo: {
      type: DataTypes.TEXT
    },
    latitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(12,9),
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(12,9),
      validate: {
        min: -180,
        max: 180
      }
    },
    changing_station: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    sink: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    hot_water_dispenser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    power_point: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    lockable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
    underscored: true
  });
  return Location;
};