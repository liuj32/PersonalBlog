/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

 // 计数排序
 var relativeSortArray = function(arr1, arr2) {
    var upper = Math.max(...arr1)
    var frequency = [] // 频率数组
    for(var x of arr1) {
      if (frequency[x]) {
        frequency[x]++
      } else {
        frequency[x] = 1
      }
    }
    var index = 0, res = []
    for(var x of arr2) {
      for(var j=0;j<frequency[x];j++){
        res.push(x)
      }
      frequency[x] = 0
    }
 
    for(var x=0;x<=upper;x++) {
      for(var j=0;j<frequency[x];j++){
        res.push(x)
      }
    }
 
    return res
 };