/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var record = new Set()
    for(var num of nums) {
      if (record.has(num)) {
        return true
      }
      record.add(num)
    }
  
    return false
  };