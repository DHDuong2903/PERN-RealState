"use strict";
import { Model } from "sequelize";
import { enumData } from "../utils/constants.js";
export default (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      idPost: DataTypes.INTEGER,
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      avgStar: DataTypes.FLOAT,
      price: DataTypes.BIGINT,
      priceUnit: DataTypes.BIGINT,
      size: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      floor: DataTypes.INTEGER,
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
      isFurniture: DataTypes.BOOLEAN,
      listingType: {
        type: DataTypes.ENUM,
        values: enumData.listingTypes,
      },
      propertyType: {
        type: DataTypes.ENUM,
        values: enumData.propertyTypes,
      },
      direction: {
        type: DataTypes.ENUM,
        values: enumData.directions,
      },
      balonyDirection: {
        type: DataTypes.ENUM,
        values: enumData.directions,
      },
      verified: DataTypes.BOOLEAN,
      expiredDate: DataTypes.DATE,
      expiredBoost: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: enumData.postStatus,
      },
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
