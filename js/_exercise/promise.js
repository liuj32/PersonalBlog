  // new Promise((resolve, reject) => {
  //     resolve('')
  // }).then(() => {}).catch(() => {})
  

  const  PENDING = 1
  const  FULFILLED = 2
  const  REJECTED = 3

  function MyPromise(executor) {
    let self = this
    this.state = PENDING
    this.val = ''
    this.resolveQueue = []
    this.rejectQueue = []
    function resolve(val) {
      if (self.state === PENDING) {
        setTimeout(() => {
          self.state = FULFILLED
          self.val = val
          self.resolveQueue.forEach((cb) => cb(val))
        })
      }
    }
    function reject(err) {
      if (self.state === PENDING) {
        setTimeout(() => {
          self.state = REJECTED
          self.val = err
          self.rejectQueue.forEach((cb) => cb(err))
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  MyPromise.prototype.then = function(onResolve, onReject) {
    const self = this
    if (self.state === FULFILLED) {
      return new MyPromise((resolve, reject) => {
        try {
          var x = onResolve(self.val)
          if (x instanceof MyPromise) {
            x.then(resolve)
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(x)
        }
      })
    }
    if (self.state === REJECTED) {
      return new MyPromise((resolve, reject) => {
        try {
          var x = onReject(self.val)
          if (x instanceof MyPromise) {
            x.then(resolve)
          } else {
            reject(x)
          }
        } catch(e) {
          reject(x)
        }
      })
    }
    if (self.state === PENDING) {
      return new MyPromise((resolve, reject) => {
        self.resolveQueue.push((val) => {
          try {
            let x = onResolve(val);
            if (x instanceof MyPromise) {
              x.then(resolve);
            } else {
              resolve(x);
            }
          } catch(e) {
            reject(e);
          }
        })
        self.rejectQueue.push((val) => {
          try {
            let x = onReject(val);
            if (x instanceof MyPromise) {
              x.then(resolve);
            } else {
              reject(x);
            }
          } catch(e) {
            reject(e);
          }
        })
      })
    }
  }

  MyPromise.prototype.catch = function(onReject) {
    this.then(null, onReject)
  }

  MyPromise.all = function(promises) {
    return new Promise((resove, reject) => {
      var cnt = 0
      var result = []
      for(var i=0;i<promises.length;i++) {
        promises[i].then((res) => {
          result[i] = res
          cnt++
          if (cnt === promises.length) this.resolve(result)
        }, err => {
          reject(err)
        })
      }
    })
  }

  MyPromise.race = function(promises) {
    return new MyPromise((resolve, reject) => {
      for(var i=0;i<promises;this.length;i++) {
        promises[i].then(resolve, reject)
      }
    })
  }

  MyPromise.resolve = function(val) {
    return new MyPromise((resolve, reject) => {
      resolve(val)
    })
  }

  MyPromise.reject = function(err) {
    return new MyPromise((resolve, reject) => {
      reject(err)
    })
  }

  new MyPromise((resolve) => {
    resolve('')
  }).then(() => {
    console.log(1)
  }).then(() => {
    console.log(2)
  })
