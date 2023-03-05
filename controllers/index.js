// Importing .Router from 'express'
const router = require('express').Router();

// Importing data from ./api folder.
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Any requests to the '/api' sub-path (api relate) or any sub-paths under it will be handled by the apiRoutes router object.
// Any other request routes are handled by homeRoutes.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
