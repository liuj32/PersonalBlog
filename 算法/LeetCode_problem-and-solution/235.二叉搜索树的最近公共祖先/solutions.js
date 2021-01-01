var lowestCommonAncestor = function(root, p, q) {
    if (p.val >= q.val) {
        var temp = p
        p = q
        q = temp
    }

    if (root.val >= p.val && root.val <= q.val) {
        return root
    } else if (root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }  else {
        return lowestCommonAncestor(root.right, p, q)
    }
};