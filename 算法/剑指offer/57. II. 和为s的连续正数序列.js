/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    const createArr = (l, r) => {
        var arr = []
        while(l <= r) {
            arr.push(l)
            l++
        }
        return arr
    }

    var max = Math.ceil(target / 2)
    var sum = 0, start = 1
    var ans = []
    for(var i=1;i<=max;i++) {
      sum += i
      if (sum == target) {
          ans.push(createArr(start, i))
          start += 1
          i = start - 1
          sum = 0
      } else if (sum > target) {
          sum = 0
          start += 1
          i = start - 1
      }
    }
    return ans
};


// 滑动窗口
var findContinuousSequence = function(target) {
    const createArr = (l, r) => {
        var arr = []
        while(l <= r) {
            arr.push(l)
            l++
        }
        return arr
    }

    var max = Math.ceil(target / 2)
    var sum = 0
    var ans = []
    for(var l = 1, r=1;r<=max;r++) {
       sum += r
       while(sum > target) {
           sum -= l++
       }

       if (sum == target) {
           ans.push(createArr(l, r))
       }
    }
    return ans
};