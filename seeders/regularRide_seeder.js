'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Insert seed function here
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RegularRide', null, {})
  }
}
