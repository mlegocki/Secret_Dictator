const Sequelize = require('sequelize');
const db = require('../');

const Players = db.define('players', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

Players.destroyAll = function () {
    return this.destroy({
        where: {}
    })
};

module.exports = Players; 