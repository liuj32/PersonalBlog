/**
 *  三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var len = nums.length;
  var result = [];
  nums.sort((a, b) => a -b);

  for(var i=0;i<len;i++) {
    if (i-1 >= 0 && nums[i] == nums[i-1]) continue
    if (len-1 >= 0 && nums[i] + nums[len-1] * 2 < 0) continue
    if (i+1 < len && nums[i] + nums[i+1] * 2 > 0) continue

    var one = -nums[i]
    var left = i+1, right = len-1;
    while(left < right) {
        if (left-1 > i && nums[left] == nums[left-1]) {
            left++
            continue
        }
        if (right+1 < len && nums[right] == nums[right+1]) {
            right--
            continue
        }

        if (nums[left] + nums[right] === one) {
            result.push([nums[i], nums[left], nums[right]])
            left++
        } else if (nums[left] + nums[right] > one) {
            right--;
        } else {
            left++
        }
    }
  }

  return result
};