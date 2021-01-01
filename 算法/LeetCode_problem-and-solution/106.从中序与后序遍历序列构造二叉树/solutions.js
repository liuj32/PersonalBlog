// 暴力
var buildTree = function(inorder, postorder) {
    var dfs = (left, right) => {
        if (left > right) {
            return null
        }

        var  root_val = postorder[idx]
        var mid = inorder.indexOf(root_val)
        idx--
        var root = new TreeNode(root_val)
        root.right = dfs(mid+1, right)
        root.left = dfs(left, mid-1)
        return root
    }
    
    var idx = inorder.length - 1
    return dfs(0, inorder.length-1)
};