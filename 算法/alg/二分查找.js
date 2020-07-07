/**
 *  二分查找
 */


function binaryFind(arr, target, left=0, right=arr.length-1){
    let n = Math.floor((right+left)/2)
    if(target == arr[n]){
        return `找到了${target}在第${n+1}个`
    }else if(target< arr[n]){
     return   binaryFind(arr,target, 0,low,n-1)
    }else if(target > arr[n]){
      return  binaryFind(arr, target, n+1, right)
    } else  {
        return -1
    }
 
}


let arr= [2,3,4,7,7]
console.log(binaryFind(arr,7))
