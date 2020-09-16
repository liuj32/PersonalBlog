/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var len = nums.length;
  if (len < 3) return null;
  var result = nums[0] + nums[1] + nums[2];
   
   nums.sort((a, b) => a - b);
   for (var i=0;i<len;i++) {
       if (i-1 >= 0 && nums[i] === nums[i -1] ) continue;

       var left = i+1, right =  len -1;
       while (left < right) {
           if (left-1 > i && nums[left] === nums[left - 1]) {
               left++;
               continue;
           }
           if (right+1 < len && nums[right] === nums[right + 1]) {
               right--;
               continue;
           }             

           var temp = nums[i] + nums[left] + nums[right];
           if (Math.abs(temp - target) < Math.abs(result - target)) {
               result = temp;
           } 
            if (temp <  target) {
               left++;
           } else {
               right--;
           }
       }
   }

   return  result;
};