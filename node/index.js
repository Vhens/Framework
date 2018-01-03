const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

// 启动服务
app.listen(3010)
console.log(`app listen http://localhost:3010`);