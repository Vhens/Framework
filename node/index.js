const Koa = require('koa');
const path = require('path');
const json = require('koa-json');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const views = require('koa-views');
const logger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config/index');
const routers = require('./routers/index');
const app = new Koa();

/***************session存储配置***************************/ 
const sessionMysqlConfig= {
  user: config.MYSQL.user,
  password: config.MYSQL.password,
  database: config.MYSQL.database,
  host: config.MYSQL.host
};

/****************配置session中间件*******************************/
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));

/******************配置服务端模板渲染引擎中间件**************/
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
/***************配置静态资源加载中间件***********************/
const staticPath = './static';
app.use(convert(koaStatic(
  path.join(__dirname, staticPath)
)));

app.use(convert(bodyParser({
  enableTypes:['json', 'form', 'text']
})));

app.use(convert(json()));


/******************配置控制台日志中间件**********************/  
app.use(convert(logger()));

/*******************初始化路由中间件*******************************/
app.use(routers.routes()).use(routers.allowedMethods())



app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
});

module.exports = app;
