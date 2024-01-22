"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          productName: "Sepatu",
          productPrice: "100000",
          productStock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Botol Minum",
          productPrice: "20000",
          productStock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Monitor",
          productPrice: "1000000",
          productStock: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Remote TV",
          productPrice: "10000",
          productStock: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Laptop",
          productPrice: "2000000",
          productStock: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Topi",
          productPrice: "15000",
          productStock: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Mouse",
          productPrice: "150000",
          productStock: 242,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Minyak",
          productPrice: "25000",
          productStock: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Tas",
          productPrice: "120000",
          productStock: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
