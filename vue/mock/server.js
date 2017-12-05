/* eslint-disable */
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const app = new Koa();
const router = new Router();

const navList = require('./nav/navList.js');
router.get('/api/nav/navlist', async (ctx, next) => {
	const res = {
		errno: 0,
		navList: {
		}
	}
	res.navList = navList;
  ctx.body = res;
});

/**
 * 获取详情数据
 * @param {request} id 商品id
 */
const detailData = require('./detail/detail.js');
router.get('/api/detail/detail/:id', async (ctx, next) => {
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

app.use(cors());
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);
console.log("server is running at http://localhost:3000/");
