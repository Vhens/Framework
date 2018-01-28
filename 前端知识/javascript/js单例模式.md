### 单例模式的定义
  保证一个类仅有一个实例，并提供一个访问它的全局访问点(模态框、登录控件、注销控件)

  ```
  let Singleton = function (name){
    this.name = name;
    this.instance = null;
  }
  Singleton.prototype.getName = function () {
    console.log(this.name);
  }
  Singleton.getInstance = function (name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
  let a = Singleton.getInstance('vhen');
  let b = Singleton.getInstance('sing');
  console.log(a===b); // true
  ```
  ### 通用的单例模式
  ```
  // 通用的单例验证方法
  const getSingle = function (fn) {
    let res;
    return function () {
        return res || (res = fn.apply(this, arguments));
    };
  }
  // 创建登录模态框
  const loginModal = function () {
    const div = document.createElement('div');
    div.innerHTML = '登录模态框';
    document.body.appendChild(div);
    return div;
  }
  // 使用单例模式
  const createLogin = getSingle(loginModal);
  const login1 = createLogin();
  const login2 = createLogin();
  console.log(login1===login2); // true
  ```
  ### 代理实现单例模式
  ```
  const createDiv = function (html) {
    this.html = html;
    this.init();
  }
  createDiv.prototype.init = function () {
    let div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
  const ProxySingle = (function() {
    let instance;
    return function (html) {
      if (!instance) {
        instance = new createDiv(html);
      }
      return instance;
    }
  })();
  let a = new ProxySingle('vhen');
  let b = new ProxySingle('vhen1');
  console.log(a===b); // true
  ```
  ### 惰性单例 
  惰性单例指的是在需要的时候才创建对象的实例
  ```
  const createModal = (function() {
    let div;
    return function() {
      if(!div) {
        div = document.createElement('div');
        div.innerHTML = 'login';
      }
      console.log(div);
      return div;
    }
  })();
  document.getElementById('login').onclick = function(){
    let login =createModal();
    document.body.appendChild(login);
    login.style.color = 'red';
  }
  ```