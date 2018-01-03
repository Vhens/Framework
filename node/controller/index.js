const router = require('koa-router')();

router.get('/index', async(ctx, next) => {
  await ctx.render('index', {
    postsContent: "dddddddddddddddddddddddddddddd",
    postsTitle:  "4444444444444444444"
  })
});
module.exports = router;