const router = require('koa-router')();

router.get('/home', async(ctx, next) => {
  await ctx.render('home', {
    postsContent: "dddddddddddddddddddddddddddddd",
    postsTitle:  "4444444444444444444"
  })
});
module.exports = router;