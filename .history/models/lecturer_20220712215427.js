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
      lecturer.belongsTo(models.university, { foreignKey: "universityId" });
      lecturer.belongsTo(models.faculty, { foreignKey: "facultyId" });
      lecturer.belongsTo(models.course, { foreignKey: "courseId" });
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
