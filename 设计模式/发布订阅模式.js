// 某个任务完成时发送一个信号，其他任务可订阅这个信号，从而知道自己什么时候开始执行

class EventEmitter {
  constructor() {
    this.subs = {}
  }

  // 订阅通知
  on(eventType, fn) {
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(fn)
  }

  // 发布通知
  emit(eventType) {
    if (this.subs[eventType]) {
      this.subs[eventType].forEach((v) => v())
    }
  }
}

var bus = new EventEmitter()

// 注册事件
bus.on('click', () => {
  console.log('click')
})

bus.on('click', () => {
  console.log('click1')
})

// 触发事件 
bus.emit('click')
