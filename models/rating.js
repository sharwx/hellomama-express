'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rating.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED
    },
    rating: {
      allowNull: false,
      type: DataTypes.TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT.UNSIGNED
    },
    location_id: {
      allowNull: false,
      type: DataTypes.BIGINT.UNSIGNED
    },
    location_slug: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comments: {
      allowNull: true,
      type: DataTypes.TEXT
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
    modelName: 'Rating',
    tableName: 'ratings',
    underscored: true
  });
  return Rating;
};