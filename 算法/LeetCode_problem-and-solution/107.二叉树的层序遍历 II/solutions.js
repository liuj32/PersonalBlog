/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) {
      return []
    }
    var res = []
    var stack = []
    stack.push(root)
    while(stack.length > 0) {
      var curLevelSize = stack.length
      res.unshift([])
      for(var i=0;i<curLevelSize;i++) {
        var curNode = stack.shift()
        res[0].push(curNode.val)
        if (curNode.left) {
          stack.push(curNode.left)
        }
        if (curNode.right) {
          stack.push(curNode.right)
        }
      }
    }
  
    return res
  };