const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

//.mainModule is depricated since V14
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = async (cb) => {
    await fs.readFile(p, (err, fileContent) => {
        if (!err && (Object.entries(fileContent).length !== 0)) {

            // console.log('filecc', fileContent);
            // console.log('p', p);
            // //console.log('fileccjson', JSON.parse(fileContent));
            // console.log('length', Object.entries(fileContent).length);
            // return false;
            try {
                cb(JSON.parse(fileContent));
            } catch (error) {
                console.log("error catch", error);
            }
        }
        else {
            cb([]);
        }

    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });
        });
    }

    static async fetchAll(cb) {
        await getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}