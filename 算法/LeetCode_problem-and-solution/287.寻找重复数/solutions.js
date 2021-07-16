/**
 * @param {number[]} nums
 * @return {number}
 */
// floyd龟兔赛跑算法

var findDuplicate = function(nums) {
    var fast = 0, slow = 0;
    do {
      fast = nums[nums[fast]];
      slow = nums[slow];    
    } while (slow !== fast)
    fast = 0;
    while(nums[slow] != nums[fast]) {
      fast = nums[fast];
      slow = nums[slow];
    }
    return nums[slow];
  };