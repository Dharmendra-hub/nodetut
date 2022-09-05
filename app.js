const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


db.execute('SELECT * FROM products')
    .then((result) => {
        console.log(result[0]);
    }).catch(err => {
        console.log('db', err);
    });


/**
 * Create middleware using express
 * Always use the '/' route at the end
 */
app.use(bodyParser.urlencoded({ extended: false }));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Default handle all
// app.use('/', (req, res, next) => {
//     //res.status(404).send('<h1>404 Page NOt found</h1>');
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });
app.use(errorController.get404);

//CreateServer call back using node
// const server = http.createServer(app);
// server.listen(3000);

//Create server listen using express
app.listen(3000);