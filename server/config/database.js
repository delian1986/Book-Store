/* eslint-disable no-console */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
const Book=require('../models/Book');

module.exports = config => {
    mongoose.connect(config.dbPath, {
        useNewUrlParser: true
    });       
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) throw err;
        Book.seedBooks();
        User.seedAdminUser().then(() => {
            console.log('Database ready');                
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    });
    db.on('error', reason => {
        console.log(reason);
    });
};