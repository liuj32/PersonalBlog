// 146. LRU 缓存机制
// https://leetcode-cn.com/problems/lru-cache/

function ListNode(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.size = 0
    this.capacity = capacity
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1
    }
    var node = this.cache.get(key)
    this.moveToHead(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        var node = this.cache.get(key)
        node.value = value
        this.cache.set(key, node)
        this.moveToHead(node)
    }  else {
        var node = new ListNode(key, value)
        this.cache.set(key, node)
        this.size += 1
        this.addToHead(node)
        if (this.size > this.capacity) {
            var removed = this.removeTail()
            this.cache.delete(removed.key)
            this.size -= 1
        }
    }
};
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
}
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}
LRUCache.prototype.removeTail = function() {
    var node = this.tail.prev
    this.removeNode(node)
    return node
}
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node)
    this.addToHead(node)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */