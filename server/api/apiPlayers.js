const apiPlayers = require('express').Router();
const { Players } = require('../db/models');


apiPlayers.get('/', (req, res, next) => {
    Players.findAll()
        .then(players => res.json(players))
        .catch(next);
});

apiPlayers.post('/', (req, res, next) => {
    Players.create(req.body)
        .then(player => res.json(player))
        .catch(next);
});

apiPlayers.put('/:playerId', (req, res, next) => {
    Players.findById(req.params.playerId)
        .then(player => player.update(req.body))
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(next);
});

apiPlayers.delete('/:playerId', (req, res, next) => {
    Players.findById(req.params.playerId)
        .then(player => player.destroy())
        .then(() => res.end())
        .catch(next);
});

apiPlayers.delete('/', (req, res, next) => {
    Players.destroyAll()
        .then(() => res.end())
        .catch(next);
});

module.exports = apiPlayers;