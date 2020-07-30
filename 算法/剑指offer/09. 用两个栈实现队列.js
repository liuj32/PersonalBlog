/**
 * 用两个栈实现队列
 */

var CQueue = function() {
  this.inStack = []
  this.outStack = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if (this.outStack.length == 0) {
      while(this.inStack.length) {
          this.outStack.push(this.inStack.pop())
      }
  }
  if (this.outStack.length == 0) {
      return -1
  } else {
      return this.outStack.pop()
  }
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/