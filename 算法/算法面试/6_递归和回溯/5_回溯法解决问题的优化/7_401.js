/**
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。

每个 LED 代表一个 0 或 1，最低位在右侧。
 * @return {string[]}
 */
var readBinaryWatch = function(num) {

  var hour = [8, 4, 2, 1]
  var minute = [32, 16, 8, 4, 2, 1]
  var result = new Set()

  for(var i=0;i<=num;i++) {
      var hours = [], minutes = []
      splitTime(hour, i, 0, [], hours)
      splitTime(minute, num - i, 0, [], minutes)
      var tempRes = []
      tempRes = merge(hours, minutes)
      tempRes.forEach(e => result.add(e))
  }

  return [...result];
};

function merge(hour, minutes) {
  var res = []
  for(var i=0;i<hour.length;i++) {
    if (hour[i] > 11) {
      continue
    }
    for(var j=0;j<minutes.length;j++) {
      if (minutes[j] > 59) {
        continue;
      }
      var minute = minutes[j]
      if (minutes[j] < 10) {
        minute = '0' + minute
      }
      res.push(hour[i] + ':' + minute)
    }
  }

  return  res;
}

function splitTime(nums, k, start, temp, res) {
  if (temp.length == k) {
      res.push(temp.reduce((a, b) => a+b, 0))
      return;
  }

  if (nums.length - start < k - temp.length) {
      return
  }

  for(var i=start;i<nums.length;i++) {
      temp.push(nums[i])
      splitTime(nums, k, i+1, temp, res)
      temp.pop()
  }
}


// 示例：

// 输入: n = 1
// 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
