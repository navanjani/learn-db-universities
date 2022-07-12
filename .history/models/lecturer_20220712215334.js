"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      faculty.belongsTo(models.university, { foreignKey: "universityId" });
    }
  }
  lecturer.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      permanent: DataTypes.BOOLEAN,
      experience: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "lecturer",
    }
  );
  return lecturer;
};
