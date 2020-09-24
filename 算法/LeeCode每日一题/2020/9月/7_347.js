/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   var record = new Map()
   for(var num of nums) {
       if (record.has(num)) {
          var count = record.get(num)
          count++
          record.set(num, count)
       } else {
           record.set(num, 1)
       }
   }
   var arr = [...record].sort((a, b) => b[1] - a[1])
   var res = []
   for(var i = 0;i<k;i++) {
       res.push(arr[i][0])
   }
   return res
}

// 小根堆
var topKFrequent = function(nums, k) {
    var record = new Map()
    for(var num of nums) {
        if (record.has(num)) {
           var count = record.get(num)
           count++
           record.set(num, count)
        } else {
            record.set(num, 1)
        }
    }
    
    var pq = []
    for(var item of record.entries()) {
        if (pq.length === k) {
            pq.sort((a, b) => a[0] - b[0])
            if (pq[0][0] < item[1]) {
                pq.shift()
                pq.push([item[1], item[0]])
            }
        } else {
            pq.push([item[1], item[0]])
        }
    }
    var res = []
    while(pq.length) {
        var cur = pq.shift()
        res.push(cur[1])
    }
    return res
 }