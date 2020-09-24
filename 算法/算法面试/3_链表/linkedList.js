function ListNode(val) {
     this.val = val;
     this.next = null;
 }

function createLinkedList(arr) {
  var len = arr.length;
  if (len === 0) return null;

  var head = new ListNode(arr[0]);
  var curNode = head;
  for (var i=1;i<len;i++) {
    var node = new ListNode(arr[i]);
    curNode.next = node;
    curNode = curNode.next;
  }
  return head;
}


function reverseLinkedList(head) { 
    if (head == null) {
      return null
    }
    var prev = null, curNode = head, next;
    while(curNode) {
      next = curNode.next;

      curNode.next = prev;
      prev = curNode;
      curNode = next;      
    }

    return prev;
}

function printLinkedList(head) {
  var curNode = head;

  var str = ''
  while (curNode != null) {
    str += curNode.val + '->'
    curNode = curNode.next
  }
  str += 'NULL'
  console.log(str)
}

var arr = [1,2,3,4]
var head = createLinkedList(arr);
var reverseHead = createLinkedList(head);

printLinkedList(head)
printLinkedList(reverseHead)