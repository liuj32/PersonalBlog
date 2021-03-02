/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) {
        return []
    }
    var res = []
    var stack = []
    stack.push(root)
    while(stack.length) {
        var n = stack.length
        var levelMax = -Infinity
        for(var i=0;i<n;i++) {
            var node = stack.shift()
            levelMax = Math.max(levelMax, node.val)
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }            
        }
        res.push(levelMax)
    }
    return res
};