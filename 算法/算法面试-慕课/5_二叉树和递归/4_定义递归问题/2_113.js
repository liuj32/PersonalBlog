/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root == null) {
      return []
  };
  if (root.left == null && root.right == null) {
     if (root.val == sum) return [[root.val]]
     else return []
  }

 var leftPath = pathSum(root.left, sum - root.val);
 for(var i=0;i<leftPath.length;i++) {
     leftPath[i].unshift(root.val)
 }

 var rightPath = pathSum(root.right, sum - root.val);
 for(var j=0;j<rightPath.length;j++) {
     rightPath[j].unshift(root.val)
 }   
 

  return [...leftPath, ...rightPath];
};



// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]
