const express = require('express');
// const static = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerObj = multer({dest: './static/upload'});
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
// const expressRoute = require('express-route');
const app = express();
// const router = express.Router();

app.listen(8080);

// 将路由挂载至应用
// app.use('/', router);

app.use(express.static('static'));