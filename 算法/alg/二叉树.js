
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = () => { return this.data }
}

function insert(data) {
    let node = new Node(data, null, null)
    if (this.root == null) {
        this.root = node
    } else {
        let current = this.root
        let parent
        while (true) {
            parent = current
            if (data < current.show()) {
                current = current.left
                if (current == null) {
                    parent.left = node
                    break;
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = node
                    break;
                }
            }
        }
    }
}

function Bst() {
    this.insert = insert
    this.root = null
}



//中序
function zOrder(node) {
    if (node !== null) {
        //如果不是null，就一直查找左变，因此递归
        inOrder(node.left);
        //递归结束，打印当前值
        console.log(node.show());
        //上一次递归已经把左边搞完了，右边
        inOrder(node.right);
    }
}

//前序
function qOrder(node) {
    if (node !== null) {
        //如果不是null，就一直查找左变，因此递归
        console.log(node.show());
        qOrder(node.left);
        //递归结束，打印当前值

        //上一次递归已经把左边搞完了，右边
        qOrder(node.right);
    }
}
//后序
function hOrder(node) {
    if (node !== null) {

        hOrder(node.left);
        //递归结束，打印当前值

        //上一次递归已经把左边搞完了，右边
        hOrder(node.right);
        //如果不是null，就一直查找左变，因此递归
        console.log(node.show());
    }
}

//找最小值
function findMin(b) {
    let current = b.root
    if (!current) {
        return '空二叉树'
    }
    while (current.left != null) {
        current = current.left
    }
    return current.show()
}

//找最小值
function findMax(root) {
    let current = b.root
    while (current.right != null) {
        current = current.right
    }
    return current.show()
}

//是否存在某值
function isExit(target, bs) {
    let current = bs.root
    if (!current) {
        return -1
    }
    while (current != null) {
        if(current.show() == target){
            return true 
        }
        if (target < current.show()) {
            current = current.left
        } else {
            current = current.right
        }
    }

    return -1
}
let b = new Bst()

b.insert(4)
b.insert(1)
//在刚才已有bst的基础上执行命令
console.log(isExit(1, b))
