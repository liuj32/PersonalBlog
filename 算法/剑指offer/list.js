function ListNode(x){
    this.val = x;
    this.next = null;
}

function arrToList(arr) {
  var prev = new ListNode();
  var head = prev;
  for(var i=0;i<arr.length;i++){
    var node = new ListNode(arr[i])
    prev.next = node;
    prev = prev.next;
  }
  return head.next;
}