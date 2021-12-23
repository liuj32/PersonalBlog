/**
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = [];
  this.printArr = [];
  if(!nestedList) return [];
  
  this.stack.push({s: 'go', list: nestedList});
  while(this.stack.length > 0) {
      var {s, list} = this.stack.pop();
      if (s === 'print') {
          this.printArr.unshift(list)
      } else {
          for(var i=0;i<list.length;i++) {
              if (list[i].isInteger()) {
                  this.stack.push({s: 'print', list: list[i].getInteger()})
              } else {
                  this.stack.push({s: 'go', list: list[i].getList()})
              }
          }
      }
  }

};


/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.printArr.length > 0
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.printArr.shift();
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/


// 示例 1:

// 输入: [[1,1],2,[1,1]]
// 输出: [1,1,2,1,1]
// 解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
// 示例 2:

// 输入: [1,[4,[6]]]
// 输出: [1,4,6]
// 解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。
