class EventEmitter {
    constructor() {
        this.subs = {}
    }

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