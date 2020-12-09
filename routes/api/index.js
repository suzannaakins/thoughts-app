//this file imports all API routes to prefix their endpoint names + packages them up

const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//add prefix of `/users` to routes created in user-routes.js
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;

