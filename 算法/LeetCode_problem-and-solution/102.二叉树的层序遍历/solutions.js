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
var levelOrder = function(root) {
    if (root == null) {
      return []
    }
  
    var stack = []
    var res = []
    stack.push(root)
    while(stack.length > 0) {
      var curLevelSize = stack.length
      res.push([])
      for(var i=0;i<curLevelSize;i++) {
        var curNode = stack.shift()
        res[res.length-1].push(curNode.val)
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