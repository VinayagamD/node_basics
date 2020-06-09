const express = require('express');

const adminData = require('./admin');

const  router = express.Router();


router.get((req, res, next) => {
   const users = adminData.users;
    res.render('users',{
        users: users,
        path: '/users',
        pageTitle: 'Users List'
   });
});

module.exports = router;
