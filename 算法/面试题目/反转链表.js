let c = {
    value: 3,
    next: null
}
let b = {
    value: 2,
    next: c
}
let a = {
    value: 1,
    next: b
}
// a -> b 变为 b->a
// a->b->c->  c->b->a

// 1, 2, 3
function Node(val) {
  this.value = val
  this.next = null
}

function reverseNodeList(head) {
    var dummy
    var cur, next, prev
    prev = null
    dummy = new Node()
    cur = head
    while(cur) {
        next = cur.next
        prev = dummy.next
        dummy.next = cur
        cur.next = prev
        cur = next
    }
    return dummy.next
}



var head = reverseNodeList(a)
console.log(head)
