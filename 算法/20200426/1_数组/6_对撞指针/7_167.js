/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let len = numbers.length;
  for (let i=0;i<len;i++) {
      for(let j=i+1;j<len;j++) {
          if (numbers[i] + numbers[j] === target) {
              return [i+1, j+1]
          }
      }
  }
  return []
};


var twoSum_optimize = function(numbers, target) {
  let len = numbers.length;

  for (let i=0, j = len-1;i<j;) {
      if (numbers[i] + numbers[j] === target) {
          return [i+1, j+1];
      } else if (numbers[i] + numbers[j] > target) {
          j--;
      } else {
          i++
      }
  }
  return []
};

var arr = [1,3,10]
var result = twoSum(arr,3)

console.log(result)

