/**
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length;
    var record = new Set();
    var  result  = false;

    for (var i=0;i<len;i++) {
      console.log([...record]);
        [...record].forEach(e => {
          console.log(e, nums[i])
            if (Math.abs(e - nums[i]) <= t) {
              result = true;
              return ;
            }
        });
        if (result) {
          return result;
        }

        record.add(nums[i]);
        if (record.size == k+1) {
            record.delete(nums[i - k]);
        }
    }

    return false;
};