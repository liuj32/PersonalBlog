/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
var zigzagLevelOrder = function(root) {
  if (root == null) {
      return [];
  }

  var res = [];
  var stack = [];
  stack.push({node: root, level: 0})

  while(stack.length > 0) {
      var cur = stack.shift();
      var { node, level } = cur;
      if (res.length == level) {
          res[level] = [];
      }
      if (level % 2 === 0) {
          res[level].push(node.val);
      } else {
          res[level].unshift(node.val)
      }

      if (node.left) {
          stack.push({ node:node.left, level: level + 1})
      } 
      if (node.right) {
          stack.push({ node:node.right, level: level + 1})
      }
  }

  return res;
};


// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层次遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]
