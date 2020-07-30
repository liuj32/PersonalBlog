/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length == 0) return null

  var count = 0
  const help = (left, right) => {
      if(left > right) {
          return null
      }
      var idx = inorder.indexOf(preorder[count])
      var root = new TreeNode(preorder[count])
      count++
      root.left = help(left, idx-1)
      root.right = help(idx+1, right)
      return root
  }

  return help(0, preorder.length-1)
};