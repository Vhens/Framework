const router = require('koa-router')();

const home = require('../controller/home');
const login = require('../controller/login');


router.use(home.routes(), home.allowedMethods());
router.use(login.routes(), home.allowedMethods());

module.exports = router;