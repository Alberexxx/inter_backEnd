'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'mimetype', {
      type: Sequelize.TEXT,
      allowNull: false
   
    }),
    await queryInterface.changeColumn('products', 'originalname', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
