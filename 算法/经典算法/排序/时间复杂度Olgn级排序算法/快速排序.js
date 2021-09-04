// lc 912 https://leetcode-cn.com/problems/sort-an-array/
// lc 169 https://leetcode-cn.com/problems/majority-element/



function quicksort(l, r, b) {
    var i,j,x;
    if(l>=r) return;
    i=l;
    j=r;
    x=b[i];
    while(i!=j) {
      while(b[j]>x&&j>i) j--;
      if(i<j) {
        b[i]=b[j];
        i++;
      }
      while(b[i]<x&&j>i)i++;
      if(i<j) {
        b[j]=b[i];
        j--;
      }
    }
    b[i]=x;
    quicksort(l,j-1,b);
    quicksort(i+1,r,b);
  }

//   var arr = [3, 1, 2]
//   quicksort(0, 2, arr)
//   console.log(arr)
