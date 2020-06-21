
/**
 * 快速排序
 * @param {*} arr 
 */
function quick(arr){
    if(arr.length<=1){
       return arr
    }
    let left = [],
    right = [],
    temp = arr.splice(Math.floor(arr.length/2),1)[0]
    for(let i=0;i<arr.length;i++){
        let item = arr[i]
        if(item<temp){
            left.push(item)
        }else{
            right.push(item)
        }
    }
    return quick(left).concat(temp, quick(right))
}

// let arr= [1,31,2]
// console.log(quick(arr))
// console.log(arr)

/**
 * 选择排序
 */


function checkSort(arr) {
    let temp = null
    for(let i=0,length=arr.length;i<length-1;i++){
        for(let j=i+1;j<length;j++){
            if(arr[i]>arr[j]){
               temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
            }
        }
    }
  }

//   let arr= [3,1,31,2]
//   checkSort(arr)
//   console.log(arr)

function bubleSort(arr) {  
  let temp = null
  for(let i=arr.length;i>=2;i--){
      for(let j=0;j<i-1;j++){
          if(arr[j]>arr[j+1]){
              temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
          }
      }
  }
}


function insertSort(arr){
    let temp = null
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }else{
                break;
            }
        }
    }
}




function shellSort(arr,gap) { 
    for(let i=0;i<gap.length;i++){
       let n = gap[i]

       for(let j=i+n;j<arr.length;j++){
           for(let k=j;k>0;k-=n){
               if(arr[k]<arr[k-n]){
                   [arr[k],arr[k-n]] = [arr[k-n],arr[k]]
               }
           }
       }
    }
 }

let arr =['3b','3a',6,5,2]
let tap = [1]
quick(arr)
console.log(arr)





