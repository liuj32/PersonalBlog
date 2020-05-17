/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var len = nums.length;
  var result = [];
  
  nums.sort((a, b) => a -b);
  for (var i=0;i<len;i++) {
      if (i-1 >= 0 && nums[i] === nums[i -1]) continue;
      if (len -1 >= 0 && nums[i] + nums[len -1] *3 < target) continue;
      if (i+1 < len && nums[i] + nums[i+1] * 3 > target) break;

      for (var j=i+1;j<len;j++) {
          if (j-1 > i && nums[j] === nums[j -1]) continue;
          if (len -1 >= 0 && nums[i] + nums[j] + nums[len -1] *2 < target) continue;
          if (j+1 < len && nums[i] + nums[j] + nums[j+1] * 2 > target) break;            

          var left = j+1, right = len -1; 
          while (left < right) {
              if (left-1 > j && nums[left] === nums[left -1]) {
                  left++;
                  continue;
              }
              if (right+1 < len && nums[right] === nums[right+1]) {
                  right--;
                  continue;
              }

              if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
                  result.push([nums[i], nums[j], nums[left], nums[right]]);
                  left++;
              } else if(nums[i] + nums[j] + nums[left] + nums[right] > target){
                  right--;
              } else {
                  left++;
              }

          }
      }
  }
  
  return result;
};