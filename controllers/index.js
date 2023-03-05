// Importing .Router from 'express'
const router = require('express').Router();

// Importing data from ./api folder and ./homeRoutes folder
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Any requests to the '/api' will be handled by the apiRoutes.
// Any request to the '/' will handled by homeRoutes.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
