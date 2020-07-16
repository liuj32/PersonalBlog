/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length == 0) {
      return null
  }
 var root = null
 var idx =  Math.floor(nums.length /2)
 root = new TreeNode(nums[idx]) 
 root.left = sortedArrayToBST(nums.slice(0, idx))
 root.right = sortedArrayToBST(nums.slice(idx+1))

 return root
};