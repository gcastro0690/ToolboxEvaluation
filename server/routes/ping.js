const router = require('express-promise-router')();
const pingController = require('../controller/ping');

router.route('/').post(pingController.ping);

module.exports = router;
