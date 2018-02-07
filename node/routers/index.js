const router = require('koa-router')();

const home = require('./home');
const login = require('./login');


router.use(home.routes(), home.allowedMethods());
router.use(login.routes(), home.allowedMethods());

module.exports = router;