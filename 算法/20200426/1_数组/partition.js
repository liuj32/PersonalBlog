/**
 *  三路快排
 * @param {*} arr  
 */
function partition(arr) {

  let zero = -1;
  let two = arr.length; 
  for(i=0;i<two;){
    if (arr[i] === 1) {
       i++;
    } else if (arr[i] == 0) {
      zero++;
      [arr[zero], arr[i]] = [arr[i], arr[zero]]
      i++;
    } else {
      two--;
      [arr[i], arr[two]] = [arr[two], arr[i]]
    }
  }
}

var arr = [1, 1, 1, 0, 0]
var result = partition(arr)

console.log(arr)