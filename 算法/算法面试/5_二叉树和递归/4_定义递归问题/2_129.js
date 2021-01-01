/**
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。

例如，从根到叶子节点路径 1->2->3 代表数字 123。

计算从根到叶子节点生成的所有数字之和。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  var pathArr = pathAll(root)
  var result = 0;
  console.log(pathArr)
  for(var i=0;i<pathArr.length;i++) {
      result += parseInt(pathArr[i].join(''))
  }

  return result;
};

function pathAll(root){
   if (root == null) {
       return [];
   }
   if (root.left == null && root.right == null) {
       return [[root.val]]
   }
   var leftPath = pathAll(root.left)
   for(var i=0;i<leftPath.length;i++) {
       leftPath[i].unshift(root.val)
   }
   var rightPath = pathAll(root.right)
   for(var j=0;j<rightPath.length;j++) {
       rightPath[j].unshift(root.val)
   }    

   return [...leftPath, ...rightPath]
}

// 优化
var sumNumbers2 = function(root) {
  return help(root, 0)
};

function help(root, sum){
   if (!root) {
       return 0;
   }
   if (root.left == null && root.right == null) {
       return 10 * sum + root.val;
   }
   return help(root.left, 10 * sum + root.val) +
     help(root.right, 10 * sum + root.val);
}


// 示例 1:

// 输入: [1,2,3]
//     1
//    / \
//   2   3
// 输出: 25
// 解释:
// 从根到叶子节点路径 1->2 代表数字 12.
// 从根到叶子节点路径 1->3 代表数字 13.
// 因此，数字总和 = 12 + 13 = 25.
