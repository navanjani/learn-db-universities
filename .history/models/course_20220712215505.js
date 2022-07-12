"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.hasMany(models.lecturer, { foreignKey: "courseId" });
      course.hasMany(models.student, { foreignKey: "courseId" });
      course.belongsTo(models.faculty, { foreignKey: "facultyId" });
    }
  }
  course.init(
    {
      name: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "course",
    }
  );
  return course;
};
