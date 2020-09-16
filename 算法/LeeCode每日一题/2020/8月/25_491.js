/**
 *491. 递增子序列 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  if (nums.length <2) return []

  const dfs = (start, temp) => {
      if (temp.length >= 2) {
          ans.push([...temp])
      }
      var record = []
      for(var i=start;i<nums.length;i++) {
          if (
              record.indexOf(nums[i]) == -1 &&
              (temp.length == 0 || nums[i] >= temp[temp.length-1])
          ) {
              record.push(nums[i])
              temp.push(nums[i])
              dfs(i+1, temp)
              temp.pop()
          }
      } 
  }

  var ans = []
  dfs(0, [])
  return ans
};