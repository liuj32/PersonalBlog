/**
 * 恢复二叉搜索树
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (root == null) return null

    var leftMax = findMax(root.left)
    var rightMin = findMin(root.right)
    if (rightMin < leftMax) {
        var leftNode = findNodeByVal(root.left, leftMax)
        var rightNode = findNodeByVal(root.right, rightMin)
        swap(leftNode, rightNode)
    } else if (leftMax > root.val) {
        var leftNode = findNodeByVal(root.left, leftMax)
        swap(leftNode, root)
    } else if (rightMin < root.val) {
        var rightNode = findNodeByVal(root.right, rightMin)
        swap(rightNode, root)
    }

    recoverTree(root.left)
    recoverTree(root.right)
    return root
};
function findMax(root) {
    if (root == null) return -Infinity
    return Math.max(root.val, findMax(root.left), findMax(root.right))
}

function findMin(root) {
    if (root == null) return Infinity
    return Math.min(root.val, findMin(root.left), findMin(root.right))
}

function swap(node1, node2) {
    var temp = node1.val
    node1.val = node2.val
    node2.val = temp
}

function  findNodeByVal(root, val) {
        if (root == null) return null
        
        if (root.val === val) {
            return root
        }
        return findNodeByVal(root.left, val) || findNodeByVal(root.right, val)   
}


