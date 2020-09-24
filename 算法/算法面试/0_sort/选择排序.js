/**
 * 选择排序
 * 
 * 将未排序的序列找出一个最小值，存放到排序序列的最前面
 * 再从剩余的未排序序列找出最小值放到排序序列的末尾
 */

 function selectSort(arr) {
   var len = arr.length
   for(var i=0;i<len-1;i++) {
     for(var j=i+1;i<len;j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }
     }
   }
 }
