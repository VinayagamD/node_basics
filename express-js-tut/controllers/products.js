const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle : "Add Product",
        path: "/admin/add-product",
        productCSS: true,
        formCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct =  (req, res, next) => {
    const product  = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            productCSS: true,
            activeShop: true
        });
    });

}
