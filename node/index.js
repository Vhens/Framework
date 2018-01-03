const Koa = require('koa');
const path = require('path');
const router=require('koa-router');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const views = require('koa-views')
const app = new Koa();

/******************配置服务端模板渲染引擎中间件**************/
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
/***************配置静态资源加载中间件***********************/
app.use(koaStatic(
  path.join(__dirname, './static')
));

app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}));

app.use(json());
/*******************配置路由*******************************/
app.use(require('./controller/index.js').routes())

/******************启动服务******************************/ 
app.listen(3010)
console.log(`app listen http://localhost:3010`);