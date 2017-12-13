'use strict'
const apiRouter = require('express').Router();
const apiPlayers = require('./apiPlayers');

const db = require('../db/models');

apiRouter.use('/players', apiPlayers);

module.exports = apiRouter;