const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    req.user.createProduct({
        title: title,
        imageUrl: imageUrl,
        description: description,
        price: price
    }).then(result => {
        console.log(result);
        return res.redirect("/admin/products");
    }).catch(err => {
        console.log(err);
    });

};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId).then(product => {
        res.render('admin/edit-product', {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: editMode,
            product: product
        });
    }).catch(err => {
        console.log(err);
        return res.redirect('/');
    });

};

exports.postEditProduct = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    Product.findByPk(id).then(product => {
        product.title = title;
        product.imageUrl = imageUrl;
        product.description = description;
        product.price = price;
        return product.save();

    }).then(result => {
        console.log("Update Product!");
        res.redirect('/admin/products');
    }).catch(err => {
        console.log(err);
    });


};

exports.getProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    }).catch(err => {
        console.log(err);
    });


};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByPk(prodId).then(product => {
        return product.destroy();
    }).then(result => {
        console.log("Deleted Successful");
        res.redirect("/admin/products");
    }).catch(err => {
        console.log(err)
    });

}
