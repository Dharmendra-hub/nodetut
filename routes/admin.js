const express = require('express');

const router = express.Router();

//Handling GET Requests instead of using .use we use .get
router.get('/add-product', (req, res, next) => {
    res.send(
        '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});

router.post('/add-poduct', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;