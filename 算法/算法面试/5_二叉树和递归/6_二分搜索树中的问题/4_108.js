/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return help(nums, 0, nums.length - 1)
};

function help(nums, left, right) {
  if (left > right ) {
      return null;
  }

  var mid = Math.floor((left +  right) / 2);
  var root = new TreeNode(nums[mid])
  root.left = help(nums, left, mid - 1)
  root.right = help(nums, mid+1, right)

  return root;
}


// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
