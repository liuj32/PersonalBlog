/**
 * 双路快排
 * 
 * 通过递归的方式将数据分解为较大元素和较小元素的子序列，不断重复
 * 这个步骤直到所有数据都是有序的。
 */

 function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  
  var left = [], right = []
  var midIdx = Math.floor(arr.length / 2)
  var midVal = arr.splice(midIdx, 1)
  for(var i=0;i< arr.length;i++) {
    if (arr[i] < midVal) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(midVal, quickSort(right))
 }

 /**
 * 三路快排
 */