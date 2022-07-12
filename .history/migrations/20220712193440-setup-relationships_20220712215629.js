"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("faculties", "universityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "universities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("lecturers", "facultyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "faculties",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("lecturers", "courseId", {
      type: Sequelize.INTEGER,
      references: {
        model: "courses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("lecturers", "universityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "universities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "courseId", {
      type: Sequelize.INTEGER,
      references: {
        model: "courses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "universityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "univercities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("courses", "facultyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "faculties",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("faculties", "universityId");
    await queryInterface.removeColumn("lecturers", "facultyId");
    await queryInterface.removeColumn("lecturers", "courseId");
    await queryInterface.removeColumn("lecturers", "universityId");
    await queryInterface.removeColumn("students", "courseId");
    await queryInterface.removeColumn("students", "universityId");
    await queryInterface.removeColumn("courses", "facultyId");
  },
};
