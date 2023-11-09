'use strict';

const { DataTypes } = require('sequelize');
const { AREA_TABLE } =  require('../models/area.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AREA_TABLE, {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      name:{
        type: Sequelize.DataTypes.STRING,
      
        allowNull: false,
        unique: true
      },
      observations:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      status:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    })
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(AREA_TABLE);
  },
};
