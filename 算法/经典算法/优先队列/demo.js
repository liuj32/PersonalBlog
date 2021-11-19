/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.head = new MinHead()
    for(let num of nums) {
      this.add(num)
    }
  };
  
  /** 
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function(val) {
    this.head.offer(val)
    // if (this.head.size() > this.k) {
    //   this.head.poll()
    // }
    console.log(this.head.peek())
    console.log(this.head)
    return this.head.peek()
  };
  
  /**
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */
  
  // 小根堆
   
  class MinHead {
      constructor(data = []) {
          this.data = data
          this.comparator = (a, b) => a - b
          this.heapify()
      }
  
      heapify() {
          if(this.size() < 2) return;
          for(let i=1;i<this.size();i++) {
              this.bubbleUp(i);
          }
      }
  
      peek() {
          if (this.size() === 0) return null
          return this.data[0]
      }
  
      offer(value) {
          this.data.push(value)
          this.bubbleUp(this.size() - 1)
      }
  
      poll() {
          if (this.size() === 0) {
              return null
          }
          const result = this.data[0]
          const last = this.data.pop()
          if (this.size() !== 0) {
              this.data[0] = last
              this.bubbleDown(0)
          }
          return result
      }
  
      bubbleUp(index) {
          while(index > 0) {
              const parentIndex = (index - 1) >> 1
              if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                  this.swap(index, parentIndex)
                  index = parentIndex
              } else {
                  break
              }
          }
      }
  
      bubbleDown(index) {
          const lastIndex = this.size() - 1
          while(true) {
              const leftIndex = index * 2 + 1
              const rightIndex = index * 2 + 2
              let findIndex = index
              if (
                  leftIndex <= lastIndex
                  && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
              ) {
                  findIndex = leftIndex
              }
              if (
                  rightIndex <= lastIndex
                  && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
              ) {
                  findIndex = rightIndex
              }
              if (index !== findIndex) {
                  this.swap(index, findIndex)
                  index = findIndex
              } else {
                  break
              }
          }
      }
  
      swap(index1, index2) {
          [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
      }
  
      size() {
          return this.data.length
      }
  }


var arr = [3, 5, 10, 9, 4]
var kthLargest = new KthLargest(3, [4, 5, 8, 2]);

for(var num of arr){
    kthLargest.add(num)
}