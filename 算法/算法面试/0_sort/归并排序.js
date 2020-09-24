/**
 * 归并排序
 * 
 * 把长度为n的输入序列分为两个长度为n/2的子序列；
 * 对两个子序列分别实现归并排序；
 * 将排好序的子序列合并为一个排序序列；
 * 
 * 时间复杂度O(nlogn), 空间复杂度O(n), 稳定
 */

 function mergeSort(arr) {
    var len = arr.length
    if (len < 2) {
      return arr
    }

    var left = [], right = []
    var midIdx = Math.floor(len / 2)
    left = arr.slice(0, midIdx)
    right = arr.slice(midIdx)

    return merge(mergeSort(left), mergeSort(right))
 }

 function merge(left, right) {
    var result = []
    while(left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    while(left.length) {
      result.push(left.shift())
    }
    while(right.length) {
      result.push(right.shift())
    }

    return result
 }