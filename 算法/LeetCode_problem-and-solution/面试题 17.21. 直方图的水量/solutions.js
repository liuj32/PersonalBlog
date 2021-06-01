/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    var m = height.length
    if (m <= 1) {
        return 0
    }
    var maxHeight = Math.max(...height)
    var i = 0, j = 1
    var leftRes = 0, rightRes = 0
    while(j < m) {
        if (height[j] >= height[i]) {
            var num = Math.min(height[i], height[j])
            for(var k=i+1;k<j;k++) {
                leftRes += num - height[k]
            }
            i = j
        }
        j++
    }
    i = m - 1
    j = m - 2
    while(j >= 0 && height[i] < maxHeight) {
        if (height[j] >= height[i]) {
            var num = Math.min(height[i], height[j])
            for(var k=j+1;k<i;k++) {
                rightRes += num - height[k]
            }
            i = j
        }
        if (height[j] === maxHeight) {
            break
        }
        j--
    }
    return leftRes + rightRes
};

// 双指针
var trap = function(height) {
    var m = height.length
    if (m <= 1) {
        return 0
    }
    var left = 0, right = m -1
    var leftMax = 0, rightMax = 0
    var res = 0
    while(left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if(height[left] < height[right]) {
            res += leftMax - height[left]
            left++
        } else {
            res += rightMax - height[right]
            right--
        }
    }
    return res
};