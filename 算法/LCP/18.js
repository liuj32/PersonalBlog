/**
 * LCP 18. 早餐组合
 * 
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */

// 双指针
var breakfastNumber = function(staple, drinks, x) {
    var res = 0
    staple.sort((a, b) => a-b)
    drinks.sort((a, b) => a-b)
    var i = 0
    j = drinks.length - 1
    while (i < staple.length && j >= 0) {
        if (staple[i] + drinks[j] > x) j--
        else {
            res += (j + 1);
            res %= 1000000007
            i++;
        }
    }
    return res
};