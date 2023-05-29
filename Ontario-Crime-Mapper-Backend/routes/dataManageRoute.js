const router = require('express').Router();
const dataManagement = require('../middleware/dataManagement');

router.get('/', dataManagement.getTweets);

module.exports = router;