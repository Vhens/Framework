const config = require('../config/index');
const mysql = require("mysql");
const pool = mysql.createPool(config.MYSQL)
let query = function(sql, values) {
  return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
          if (err) {
              resolve(err)
          } else {
            connection.query(sql, values, (err, result) => {  
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
                connection.release()
            })
          }
      })
  })
}
module.exports = {
    query
};
