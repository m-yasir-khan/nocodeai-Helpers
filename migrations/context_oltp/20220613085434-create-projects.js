'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      owner_id: {
        type: Sequelize.STRING
      },
      template_id: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      project_image_url: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      retension: {
        type: Sequelize.INTEGER
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      worflow_id: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};