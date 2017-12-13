'use strict';

const { db, Players } = require('./server/db/models');
const app = require('./server')
const PORT = 9999;

db.sync()
    .then(() => {
        console.log('Database synced')
        app.listen(PORT, () => {
            console.log(`Server is connected and listening on ${PORT}`)
        })
    })
    .catch(err => {
        console.error('Database is NOT synced');
        console.error(err);
    });
