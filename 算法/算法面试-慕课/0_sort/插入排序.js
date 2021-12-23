/**
 * 插入排序
 * 
 * 
 * 
 * 时间复杂度O(n^2)
 */

function insertSort(arr) {
  var len = arr.length
  for(var i=1; i< len;i++) {
    for(var j=i;j>0;j--) {
      if(arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      } else {
        break
      }
    }
  }
}