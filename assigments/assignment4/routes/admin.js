const express = require('express');
const router = express.Router();

const users = [];

/**
 * Get Users page to add list
* */
router.get('/', (req, res, next) =>{
    res.render('add-user',{
      pageTitle: "Add User",
      path: "/"
   });
});

/**
 * Post user function to add user to the list
 * */
router.post('/', (req, res, next)=>{
    users.push({name: req.body.name});
     res.redirect("/users");
});

module.exports.router = router
module.exports.users = users
