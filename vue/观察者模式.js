class Dep {
  constructor() {
    this.subs = [] // 存储所有的观察者
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // 通知所有观察者
  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}


class Watch {

  addDep(dep){
    dep.addSub(this)
  }

  update() {
    console.log('update')
  }
}

// 测试
const dep = new Dep()
const watcher = new Watcher()
dep.addSub(watcher)
dep.notify()
