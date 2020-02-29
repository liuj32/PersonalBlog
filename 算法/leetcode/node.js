function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrToList(arr){
      var dummy = new ListNode(0)
      var prev = dummy;
      var i=0;
      while(i<arr.length){
          var node = new ListNode(arr[i])
          prev.next = node;
          prev = prev.next;
          i++;
      }
      return dummy.next;
    } 


