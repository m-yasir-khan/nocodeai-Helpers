'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects_graph_schemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      template_id: {
        type: Sequelize.STRING
      },
      source_field_name: {
        type: Sequelize.STRING
      },
      source_field_value: {
        type: Sequelize.STRING
      },
      target_field_name: {
        type: Sequelize.STRING
      },
      target_field_value: {
        type: Sequelize.STRING
      },
      relation: {
        type: Sequelize.STRING
      },
      source_id: {
        type: Sequelize.STRING
      },
      target_id: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      file_name: {
        type: Sequelize.STRING
      },
      file_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects_graph_schemas');
  }
};