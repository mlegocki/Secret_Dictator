'use strict';

const { db, Players } = require('./server/db/models');
const app = require('./server')
const PORT = 9999;

const players = [
    { name: 'Max', president: false, chancellor: false, eligible: true },
    { name: 'Chris', president: false, chancellor: false, eligible: true },
    { name: 'Martha', president: false, chancellor: false, eligible: true },
    { name: 'Dave', president: false, chancellor: false, eligible: true },
    { name: 'Mom', president: false, chancellor: false, eligible: true },
    { name: 'Dad', president: false, chancellor: false, eligible: true },
];

const seed = () =>
    players.map(player =>
        Players.create(player)
    );

// { force: true }
db.sync({force: true})
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server is connected and listening on ${PORT}`);
        });
    })
    .then(() => {
        return seed();
    })
    .catch(err => {
        console.error('Database is NOT synced');
        console.error(err);
    });
