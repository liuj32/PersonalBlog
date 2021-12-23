/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;
    let left = 0, right = len -1;
    let  max = 0;
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        if (area > max) {
            max = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

var arr = [1,8,6,2,5,4,8,3,7]
var result = maxArea(arr)

console.log(result)

