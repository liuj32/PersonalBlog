//  发布/订阅模式
*订阅者
*发布者
*信号中心
描述：存在一个信号中心，某个任务完成时，就像信号中心发布一个信号，其他任务可以向信号中心订阅这个信号，从而可以知道自己什么时候可以执行。

class EventEmitter {
    constructor() {
        this.subs = {} // 信号中心
    }

    // 订阅
    on(event, cb) {
        (this.subs[event] || this.subs[event] = []).push(cb)
    }

    trigger(event, ...args) {
        this.subs[event] &&
            this.subs[event].forEach(cb => {
                cb(...args)
            })
    }

    once(event, onceCb) {
        const cb = (...args) => {
            onceCb(...args)
            this.off(event, this.onceCb)
        }

        this.on(event, cb)
    }

    off(event, offCb) {
        if (this.subs[event]) {
            let idx = this.subs[event].findIndex(cb => cb == offCb)
            this.subs[event].splice(idx, 1)
            if (this.subs[event].length === 0) {
                delete this.subs[event]
            }
        }
    }
}
