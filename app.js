//const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/**
 * Create middleware using express
 * Always use the '/' route at the end
 */
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//Deffault handle all
app.use('/',(req, res, next) => { 
    res.status(404).send('<h1>404 Page NOt found</h1>');
});


//CreateServer call back using node
// const server = http.createServer(app);
// server.listen(3000);

//Create server listen using express
app.listen(3000);