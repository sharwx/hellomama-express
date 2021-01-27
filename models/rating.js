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
      validate: {
        notNull: {
          msg: 'Please rate'
        }
      }
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT.UNSIGNED
    },
    location_id: {
      allowNull: false,
      type: DataTypes.BIGINT.UNSIGNED
    },
    comments: {
      type: DataTypes.TEXT
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
    modelName: 'Rating',
    tableName: 'ratings',
    underscored: true
  });
  return Rating;
};