const router = require('koa-router')();
const user = require('../controller/user');
const title = '登录'
router.prefix('/login');
router.get('/', async (ctx, next) => {
  await ctx.render('login', { title })
})
router.post('/', async(ctx, next) => {
  let result = await user.login(ctx);
  ctx.body = result;
});
module.exports = router;