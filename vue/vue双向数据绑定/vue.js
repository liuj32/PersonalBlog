
class Watch {
  obj;
  key;
  value;

  constructor(obj, key, cb) {
    // 将Dep.target指向自己
    // 然后出发属性的getter 添加监听
    // 最后将Dep.target置为空
    Dep.target = this
    this.cb = cb
    this.obj = obj 
    this.key = key
    this.value = obj[key]
    Dep.target = null
  }

  addDep(dep) {
    dep.addSub(this)
  }

  update() {
    // 获取新值
    this.value = this.obj[key]
    // 调用 update 方法更新 Dom
    this.cb(this.value) // queueWatch
  }
}

class Dep {
  static target;
  subs;

  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

function Observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return val
    },
    set(newVal) {
      val = newVal
        
      dep.notify()
    }
  })
}


function update(value) {
  document.querySelector('div').innerText = value
}

var data = { name: 'yck' }
observe(data)
// 模拟解析到 `{{name}}` 触发的操作
new Watcher(data, 'name', update)
// update Dom innerText
data.name = 'yyy'


// Object.defineProperty(obj, 'key', {
//   configurable: false, // 能否delete，能否修改该属性，能否修改访问器属性(false为不可重新定义)，默认为true
//   enumerable: false, // 对象属性是否可通过for-in循环，false为不可循环，默认为true
//   writable: false, // 对象属性是否可修改，false为不可修改，默认为true
//   value: 'value', // 对象属性的默认值，默认值为undefined
// })