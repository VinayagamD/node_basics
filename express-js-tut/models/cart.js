const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path')
const p =  path.join(
    rootdir,
    'data',
    'cart.json'
);


module.exports = class Cart {

    static addProduct(id, productPrice){
        // Fetch the previous cart
        fs.readFile(p,(err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find the existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // Add new product/ increase quantity
            if(existingProduct){
                updatedProduct = { ...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct;

            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products,updatedProduct];
            }
            cart.totalPrice += productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
              console.log(err);
            });

        })

    }


}
