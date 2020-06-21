/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root == null) {
      return [];
  } 

  var res = [];
  var stack = [];
  stack.push({node: root, level: 0})
  while(stack.length > 0) {
      var cur = stack.shift();
      var { node, level } = cur;
      res[level] = node.val;

      if (node.left) {
          stack.push({ node: node.left, level: level + 1})
      }
      if (node.right) {
          stack.push({ node: node.right, level: level + 1})
      }
  }
  return res;
};


// 示例:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
