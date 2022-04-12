// 实现一个发布/订阅模式

class PubSub {
  constructor() {
    this.subs = {}
  }
  // 订阅事件方法
  on(eventType, handler) {
    if (!this.subs[eventType]) this.subs[eventType] = []

    this.subs[eventType].push(handler)
  }
  // 消息发布方法
  emit(eventType, ...handlerArgs) {
    const filterEventType = Object.keys(this.subs).find((k) => {
      return this.subs.hasOwnProperty(k) && k === eventType
    })

    ;(this.subs[filterEventType] || []).forEach((cb) => {
      cb(...handlerArgs)
    })
  }
  // 取消订阅
  off(eventType, handler) {
    const idx = (this.subs[eventType] || []).findIndex((cb) => cb === handler)
    if (idx < 0) {
      return
    }
    this.subs[eventType].splice(idx, 1)
    if (this.subs[eventType] && !this.subs[eventType].length) {
      delete this.subs.eventType
    }
  }
  once(eventType, handler) {
    const callback = (...args) => {
      handler(...args)
      this.off(eventType, callback)
    }

    this.on(eventType, callback)
  }
}

const testPubSub = new PubSub();
const fn1 = (...data) => console.log(data);

testPubSub.on('event1', fn1);
testPubSub.on('event1', (...data) => console.log(`fn2: ${data}`));
testPubSub.emit('event1', 'sangfor1', 'sangfor2', 'sangfor3');

testPubSub.off('event1', fn1);
testPubSub.emit('event1', 'sangfor1', 'sangfor2', 'sangfor3');
testPubSub.once('event2', () => console.log('once 111'))
testPubSub.emit('event2');
testPubSub.emit('event2');
testPubSub.emit('toString');

// 输出结果
// ["sangfor1", "sangfor2", "sangfor3"]
// fn2: sangfor1,sangfor2,sangfor3
// fn2: sangfor1,sangfor2,sangfor3



