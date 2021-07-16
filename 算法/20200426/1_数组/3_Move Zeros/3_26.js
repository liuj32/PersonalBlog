/**
 * 将数组中重复的元素删除
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len === 0) return 0
  let k = 0;
  for (let i=1;i<len;i++){
    if (nums[i] !== nums[k]) {
        k += 1;
        [nums[k], nums[i]] = [nums[i], nums[k]]
    }
  }
  return k + 1;
};

var arr = [1, 1, 2]
var result = removeDuplicates(arr)

console.log(arr)

