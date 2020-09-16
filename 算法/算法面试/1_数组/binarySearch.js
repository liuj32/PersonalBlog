// 二分查找
function binarySearch(arr, target) {
  var len = arr.length;
  var left = 0, right = len -1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2) // 存在边界溢出问题
    // var mid = Math.floor(left +  (right - left ) / 2) 
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      right = right -1 ;
    } else {
      left = left + 1;
    }
  }

  return - 1;
}

var arr = [1, 3, 2, 8]
var result = binarySearch(arr, 8)

console.log(result)