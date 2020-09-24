/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * @param {number[]} nums
 * @return {number}
 * 中等
 */
var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len < 3) return len;
  var k = 2;
  for (let i= 2; i< len ;i++){
      if (nums[i] != nums[k] || nums[i] != nums[k - 1]) {
          k += 1;
          [nums[k], nums[i]] = [nums[i], nums[k]]
      }
  }

  return k + 1;
};

var arr = [1, 1, 2]
var result = removeDuplicates(arr)

console.log(arr)

