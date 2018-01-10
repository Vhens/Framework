const router = require('koa-router')();

router.get('/login', async(ctx, next) => {
  await ctx.render('login', {
    title: "dddddddddddddddddddddddddddddd",
  })
});
module.exports = router;