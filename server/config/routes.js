const restrictedPages = require('./auth');
const authRoutes=require('../routes/auth');
const bookRoutes=require('../routes/book');


module.exports = app => {
    app.use('/auth', authRoutes);
    app.use('/book',bookRoutes);
    
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};