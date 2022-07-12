"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.course, { foreignKey: "courseId" });
      student.belongsTo(models.university, { foreignKey: "univercityId" });
    }
  }
  student.init(
    {
      name: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};
