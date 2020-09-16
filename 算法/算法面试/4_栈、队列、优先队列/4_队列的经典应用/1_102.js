/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
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
      return [];
  }
  var res = [];
  var stack = [];
  stack.push({node: root, level: 0});
  while(stack.length > 0) {
      var cur = stack.shift();
      var {level, node} = cur;
      if(cur.level === res.length) {
          res[cur.level] = []
      }

      res[cur.level].push(cur.node.val)
      if (cur.node.left) {
          stack.push({node: cur.node.left, level: level + 1})
      }
      if (cur.node.right) {
          stack.push({node: cur.node.right, level: level + 1})
      }        
  }

  return res;
};



// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

