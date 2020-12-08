//this file imports all API routes to prefix their endpoint names + packages them up

const router = require('express').Router();
const userRoutes = require('./user-routes');

//add prefix of `/users` to routes created in user-routes.js
router.use('/users', userRoutes);

module.exports = router;

