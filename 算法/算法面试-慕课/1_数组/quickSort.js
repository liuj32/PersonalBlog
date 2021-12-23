/**
 * 快排
 */
function quickSort(arr) {
  let len = arr.length;
  if (len <= 1) {
    return arr
  }
  let midIdx = Math.floor(len / 2)
  let midValue = arr.splice(midIdx, 1)
  let left = [], right = [];
  for(let i = 0; i < len -1 ;i++){
    if (arr[i] < midValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }


  return quickSort(left).concat(midIdx, quickSort(right))
}