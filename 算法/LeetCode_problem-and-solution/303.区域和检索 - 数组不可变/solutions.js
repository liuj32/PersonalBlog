/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
  for(var i=1;i<nums.length;i++) {
      nums[i] += nums[i-1]
  }
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
   return this.nums[j] - ((i-1) < 0 ? 0 : this.nums[i-1])
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/