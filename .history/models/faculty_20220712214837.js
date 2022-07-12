"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      faculty.hasMany(models.lecturer, { foreignKey: "facultyId" });
      faculty.hasMany(models.course, { foreignKey: "facultyId" });
    }
  }
  faculty.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "faculty",
    }
  );
  return faculty;
};
