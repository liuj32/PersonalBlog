/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var generateTrees = function(n) {
  if (!n) return [];

  const fn = (start, end) => {
    if (start > end) return [null]

    let res = []
    
    for(var i=start;i<=end;i++) {
      var leftNodes = fn(start, i-1)
      var rightNodes = fn(start+1, end)

      for(var ln of leftNodes) {
        for(var rn of rightNodes) {
          res.push(new TreeNode(i, ln, rn))
        }
      }
    }
    return res
  }

  return fn(1, n);
};