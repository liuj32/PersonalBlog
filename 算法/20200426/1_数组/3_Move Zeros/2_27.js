/**
 * 将数组中为val的元素删除
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length;
  let k = 0;
  for (let i = 0;i < len; i++){
    if (nums[i] !== val) {
      if (i !== k) {
        [nums[k], nums[i]] = [nums[i], nums[k]]
      }
      k++;
    }
  }
  return k;
};

var arr = [0,1,0,3,12]
var result = removeElement(arr, 0)

console.log(result)