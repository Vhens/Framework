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
		data: {
			content: []
		}
	}
	res.data.content = detailData;
  ctx.body = res;
});
/**
 * 获取nav数据
 * @param {request} id 商品id
 */
const navData = require('./nav/nav.js');
router.get('/api/nav/nav', function(ctx, next) {
	const res = {
		errno: 0,
		data: {
			content: []
		}
	}
	res.data.content = navData;
  ctx.body = res;
});
/**
 * 获取goods数据
 * @param {request} id 商品id
 */
const goodData = require('./goods/goods.js');
router.get('/api/goods/goods', function(ctx, next) {
	const res = {
		errno: 0,
		data: {
			content: []
		}
	}
	res.data.content = goodData;
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
