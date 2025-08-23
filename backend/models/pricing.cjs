"use strict";
const { enumData } = require("../utils/constants.cjs");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricing.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: enumData.pricings,
      },
      isDisplayImmediately: DataTypes.BOOLEAN,
      isShowDescription: DataTypes.BOOLEAN,
      priority: DataTypes.INTEGER,
      requireScore: DataTypes.INTEGER,
      requireScoreNextLevel: DataTypes.INTEGER,
      price: DataTypes.BIGINT,
      imageUrl: DataTypes.STRING,
      expireDay: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pricing",
    }
  );
  return Pricing;
};
