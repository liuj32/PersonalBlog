var postorderTraversal = function(root) {
    var res = []
    var stack = []
    var prev = null
    while(root || stack.length){
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.right == null || root.right == prev) { // 为最左侧节点或者一个节点的右节点已经被访问过
            res.push(root.val)
            prev = root
            root = null // 防止被重复递归
        } else { // 有right且未被访问过
            stack.push(root)
            root = root.right
        }
    }
  
    return res
}


// 解释：是否有right节点，没有即为最左侧节点。如果有right节点，right节点是否被访问过，未被访问过