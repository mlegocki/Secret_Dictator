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
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    chancellor: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    eligible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

Players.destroyAll = function () {
    return this.destroy({
        where: {}
    })
};

module.exports = Players; 