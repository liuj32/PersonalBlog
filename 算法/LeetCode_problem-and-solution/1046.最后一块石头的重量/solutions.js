/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  var pq = new MaxPriorityQueue()
  for(var stone of stones) {
    pq.enqueue( stone)
  }
  while(pq.size() > 1) {
      var x = pq.dequeue()['priority']
      var y = pq.dequeue()['priority']
      if (x !== y) {
          pq.enqueue(x - y)
      }
  }
  return pq.isEmpty() ? 0 : pq.dequeue()['priority']
};