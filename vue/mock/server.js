/* eslint-disable */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

/**
 * 获取详情数据
 * @param {request} id 商品id
 */
const detailData = require('./detail/detail.js');
router.get('/api/detail/detail/:id', function(ctx, next) {
  const id = ctx.params.id
	const res = {
		errno: 0,
		detail: {
			content: []
		}
	}
	res.detail.content = detailData;
  ctx.body = res;
});
/**
 * 开启服务
 */
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);
console.log("server is running at http://localhost:3000/");
