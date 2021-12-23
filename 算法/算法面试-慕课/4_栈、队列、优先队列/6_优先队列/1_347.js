
/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var record = new Map();
  for (var i=0;i<nums.length;i++) {
      var value = record.get(nums[i]);
      if(value == null) {
          value = 1;
      } else {
         value += 1;
      }
      record.set(nums[i], value)
  }

  var pq = [];
  var flag = true;
  var res = [];
  for(var item of record.entries()) {
      if (pq.length === k) {
          pq.sort((item1, item2) => item1[0] - item2[0])
          if (pq[0][0] < item[1]) {
              pq.shift();
              pq.push([item[1], item[0]])
          }
      }else {
          pq.push([item[1], item[0]])
      }
  }

  while(pq.length > 0) {
      var cur = pq.shift()
      res.push(cur[1])
  }

  return res;
}



// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]