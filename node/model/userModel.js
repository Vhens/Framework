const mysqlHelper = require('../database/mysqlHelper.js');

const userModel = {
  /**
   * 根据UserName得到一条数据
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async getByUserName( args ){
    let sql = 'SELECT id, username, password FROM vhen_user WHERE username = ?'
    let params = [args.username]
    let result = await mysqlHelper.query(sql, params);
    return result
  }
}

module.exports = userModel;