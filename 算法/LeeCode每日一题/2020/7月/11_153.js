/**
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  var res = []
  for(var i=0;i<nums.length;i++) {
      var count = 0
      for(var j=i+1;j<nums.length;j++) {
          if (nums[i] > nums[j]) {
              count++
          }
      }
      res[i] = count
  }
  return res;
};

// 归并排序 $O(nlogn)$
