// 观察者(订阅者)--watch
  update：当事件发生时，具体要做的事情
// 目标(发布者)-- Dep
  subs 数组：存储所有观察者
  addSub：添加观察者
  notify：当事件发生时，调用所有的观察者的update()方法
// 没有事件中心


// 目标(发布者)
class Dep {
  subs = []

  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach((sub) => [
      sub.update()
    ]) 
  }
}

// 观察者(订阅者)
class Watch {
  obj;
  key;
  value;
  cb;

  update() {
    this.cb()
  }
}

// 测试
let dep = new Dep()
let watcher = new Watcher()
dep.addSub(watcher) 
dep.notify()