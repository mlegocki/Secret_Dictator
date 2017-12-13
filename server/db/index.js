'use strict'
const Sequelize = require('sequelize');

// CREATE DATABASE

module.exports = new Sequelize("postgres://localhost:5432/secret_dictator", {
  logging: false,
});