import { observable, computed, autorun, action } from 'mobx'

export interface IUser {
  username: string
  sex: string
}

export default class User {
  @observable username: string
  @observable sex: string

  constructor () {
    this.username = 'vhen'
    this.sex = '男'
    this.login()
  }
  /**
   * 登录
   */
  @action login () {
    setTimeout(() => {
      this.username = 'wenwen';
      this.sex = '女'
    }, 1000);
  }
}
