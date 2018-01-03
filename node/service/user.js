const mysqlHelper = require('../database/mysqlHelper');
/**
 * 用户模型
 */
const userModel = {
  /**
   * 新增一条数据
   * @param {object} data 
   */
  async add (data) {
    const sql = '';
    const params =[data.username,data.password];
    const res = await mysqlHelper.query(sql, params);
    return res;
  },
  /**
   * 根据用户名获取数据
   * @param {Object} data 
   */
  async getByUserName (data) {
    const sql = '';
    const params =[data.username,data.password];
    const res = await mysqlHelper.query(sql, params);
    return res;
  }
}
module.exports = userModel;