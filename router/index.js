const router = require('express').Router();
const {proxyserver} = require('../proxy');

router.get('/', (req, res) => proxyserver(req, res, process.env.APP_USER_HOST));

module.exports = router;
