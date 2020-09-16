/**
 * 冒泡排序
 * 
 * 比较相邻的元素，如果第一个比第二个大，交换位置
 * 对每一个相邻的元素做同样的操作，从开始的第一队到结尾的最后一对，这样在最后找到最大值，
 * 重复上面的操作
 */

function bubbling(arr) {
  var len = arr.length
  for (var i=0;i<len-1;i++) {
    for(var j=0;j<len-1-i;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
}