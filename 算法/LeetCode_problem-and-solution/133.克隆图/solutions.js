/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

 // dfs
var cloneGraph = function(node) {
    if (!node) {
      return node
    }
    var recordMap = new Map()
    const dfs = (node) => {
      if(!node) {
        return
      }
      if (recordMap.has(node)) {
        return recordMap.get(node)
      }
      var clone = new Node(node.val)
      recordMap.set(node, clone)
      for(var i=0;i<node.neighbors.length;i++) {
        clone.neighbors.push(dfs(node.neighbors[i]))
      }
  
      return clone
    }
  
    return dfs(node)
  };

  // bfs
  var cloneGraph = function(node) {
    if (!node) {
      return node
    }
  
    var stack = [node]
    var recordMap = new Map()
    var clone = new Node(node.val)
    recordMap.set(node, clone)
    while(stack.length) {
      var curNode = stack.shift()
      for(var neighbor of curNode.neighbors) {
        if (!recordMap.has(neighbor)) {
          recordMap.set(neighbor, new Node(neighbor.val))
          stack.push(neighbor)
        }
        recordMap.get(curNode).neighbors.push(recordMap.get(neighbor))
      }
    }
    return clone
  };