const products = [];

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
    products.push({title: req.body.title})
    res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        productCSS: true,
        activeShop: true
    });
}
