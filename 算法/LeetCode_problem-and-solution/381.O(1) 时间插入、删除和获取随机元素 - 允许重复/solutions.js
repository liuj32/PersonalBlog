/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.nums = []
    this.map = new Map()
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    this.nums.push(val)
    var set = this.map.has(val) ? this.map.get(val) : new Set()
    set.add(this.nums.length-1)
    this.map.set(val, set)
    return set.size === 1
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false
    }

    var i = undefined
    for(var it of this.map.get(val)) {
        if(!i) {
            i = it
            break
        }
    }
    var lastNum = this.nums[this.nums.length-1]
    this.nums[i] = lastNum
    this.map.get(val).delete(i)
    this.map.get(lastNum).delete(this.nums.length-1)
    if (i< this.nums.length -1) {
        this.map.get(lastNum).add(i)
    }
    if (this.map.get(val).size === 0) {
        this.map.delete(val)
    }

    this.nums.pop()
    return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
    return this.nums[Math.floor(Math.random() * this.nums.length)]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */