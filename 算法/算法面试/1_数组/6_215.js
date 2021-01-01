/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums = quickSort(nums)
  return nums[k-1]
};

function quickSort(arr) {
let len = arr.length;
if (len <= 1) {
  return arr
}
let midIdx = Math.floor(len / 2)
let midValue = arr.splice(midIdx, 1)[0]
let left = [], right = [];
for(let i = 0; i < len -1 ;i++){
  if (arr[i] > midValue) {
    left.push(arr[i])
  } else {
    right.push(arr[i])
  }
}

return quickSort(left).concat(midValue, quickSort(right))
}

var arr = [1,3,10]
var result = findKthLargest(arr,3,)

console.log(result)

