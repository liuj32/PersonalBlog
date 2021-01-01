/**
 * 将数组中为0的元素移动到末尾
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i]) continue;
    for (let j = i +1; j< len;j++){
      if (nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        break;
      }
    }
  }
};

var moveZeroes_optimize = function(nums) {
  let len = nums.length;
  let k = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      nums[k++] = nums[i]
    }
  }

  for (let i = k; k < len; k++) {
    nums[k] = 0
  }  
};

var moveZeroes_optimize2 = function(nums) {
  let len = nums.length;
  let k = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      if (i != k) {
        [nums[k], nums[i]] = [nums[i], nums[k]]
      }
      k += 1;
    }
  } 
};


var arr = [0,1,0,3,12]
var result = moveZeroes_optimize2(arr)

console.log(arr)