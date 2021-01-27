'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Feature.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    location_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Feature',
    tableName: 'features',
    underscored: true
  });
  return Feature;
};