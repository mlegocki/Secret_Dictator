const Sequelize = require('sequelize');
const db = require('../');

const Players = db.define('players', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    president: { 
        type: Sequelize.ENUM("No", "Yes"),
        defaultValue: "No"
    },
    chancellor: { 
        type: Sequelize.ENUM("No", "Yes"),
        defaultValue: "No"
    },
    eligibility: {
        type: Sequelize.ENUM("No", "Yes"),
        defaultValue: "Yes"
    }
});

Players.destroyAll = function () {
    return this.destroy({
        where: {}
    })
};

module.exports = Players; 