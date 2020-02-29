/**
 * 二叉树
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}


//二叉搜索树插入 循环
function arrToSearchTree(arr) {
  var root , prev, cur;
  for (var i=0,ilen=arr.length;i<ilen;i++) {
    var node = new  TreeNode(arr[i])
    if(prev == null){
      root = prev = node;
    } else {
      prev = root
      while(prev){
        if(node.val < prev.val){
          //左子树
          if(prev.left == null ){
             prev.left = node;
             break;
          } else {
            prev = prev.left;
          }
        }else {
          //右子树
          if(prev.right == null) {
            prev.right = node;
            break;
          } else {
            prev = prev.right;
          }
        }
      }

    }
  }
  return root;
}

//二叉搜索树插入 递归
function arrToSearchTree1(arr) {
  var root
  for(var i=0,ilen = arr.length;i<ilen;i++){
    var node = new TreeNode(arr[i])
    if(root == null){
       root = node;
    }else {
      insertToTree(root, node)
    }
  }
  return root;
}
function insertToTree(root, node) {
  if(node.val < root.val){
    root.left == null ? root.left = node : insertToTree(root.left, node)
  } else {
    root.right == null ? root.right = node : insertToTree(root.right, node)
  }
}
