/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    var r = 0
    var n = nums.length
    var result = []
    var slideArr = []
    for(r;r<k;r++) {
      var index = binary(slideArr, nums[r], 0, slideArr.length)
      index = nums[r] > slideArr[index] ? index + 1 : index
      slideArr.splice(index, 0, nums[r])
    }
    var median = getMedian(slideArr)
    result.push(median)
    for(r;r<n;r++) {
      var index = binary(slideArr, nums[r], 0, slideArr.length)
      index = nums[r] > slideArr[index] ? index + 1 : index
      slideArr.splice(index, 0, nums[r])
      index = binary(slideArr, nums[r - k], 0, slideArr.length)
      slideArr.splice(index, 1)
      median = getMedian(slideArr)
      result.push(median)
    }
    return result
  };
  
  function binary(arr, num, l, r) {
    if (l >= r) {
      return l
    }
    var mid = Math.floor((l + r) / 2)
    if (arr[mid] === num) {
      return mid
    } else if (arr[mid] > num) {
      return binary(arr, num, l, mid - 1)
    } else {
      return binary(arr, num, mid+1, r)
    }
  }
  
  function getMedian(arr) {
    var n = arr.length
    if (n % 2 !== 0) {
      return arr[Math.floor(n / 2)]
    }
    return (arr[n / 2] + arr[n / 2 -1]) / 2
  }