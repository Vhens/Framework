import { observable, runInAction, action } from 'mobx'

class User {
  @observable
  public username: string = '';
  @observable
  public sex: string = '';

  /**
   * 登录
   */
  @action
  login = async (): Promise<any> => {
    runInAction(() => {
      this.username = 'wenwen';
    })
  }
}

const user = new User();
export {
  user as default,
  user
}
