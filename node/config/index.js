/*********************配置生产环境********************************/
const prod = {
  SERVER_PORT: 3010, //服务器端口
  MYSQL: { //数据库配置
    host: "localhost",
    user: "root",
    password: "abcd",
    port: "3306",
    database: "test"
  }
}

/********************配置开发者模式**********************************/

const dev = {
  SERVER_PORT: 3010, //服务器端口
  MYSQL: { //数据库配置
    host: "localhost",
    user: "root",
    password: "abcd",
    port: "3306",
    database: "test"
  }
}

const config = dev;

module.exports = config