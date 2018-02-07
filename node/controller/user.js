const usermodel = require('../model/userModel');

const user = {
    /**
   * 登录
   * @param  {object} ctx   上下文
   * @return {object}       结果
   */
  async login ( ctx ) {
    let form = ctx.request.body;
    const args = {
        username: form.username,
        password: form.password
    }
    let result = {
      code: 1,
      msg: '成功',
      data: null
    }
    let userResult = await usermodel.getByUserName(args);
    if(userResult.length == 0){
      result.code = 0;
      result.msg= '用户不存在!' ;
      return result;
    }
    if(userResult[0].username != args.username || userResult[0].password != args.password) {
      result.msg= '用户名或密码错误!' ;
      result.code = 2;
      return result;
    }
    return result
  }
}

module.exports = user