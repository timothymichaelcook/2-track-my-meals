// Setting routes
// Importing .Router from 'express'
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

// Defining the routes the router should handle.
//userRoutes to handle '/users' request.
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
