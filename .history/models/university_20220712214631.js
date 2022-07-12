"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class university extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      university.hasMany(models.faculty, { foreignKey: "universityId" });
    }
  }
  university.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      founded_in: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "university",
    }
  );
  return university;
};
