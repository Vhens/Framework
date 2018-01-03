const mysql = ('mysql');
const config = require('../config/mysql');
const pool = mysql.createPool(config);
module.exports = pool;
