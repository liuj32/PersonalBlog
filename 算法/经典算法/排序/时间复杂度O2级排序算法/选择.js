// lc 215 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// lc 912 https://leetcode-cn.com/problems/sort-an-array/

function sort(arr) {
    var n = arr.length
    var i, j, k, temp;
    for(var i=0;i<n;i++) {
      k = i
      for(j=i;j<n;j++) if (arr[j] < arr[k]) k = j;
      temp = arr[i];arr[i] = arr[k];arr[k] = temp
    }
  }

//   var arr = [3, 1, 2]
//   sort(arr)
//   console.log(arr)