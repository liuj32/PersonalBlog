/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var sumAlice = 0
    var sumBob = 0
    var record_bob = new Set()
    for(var num of A) {
        sumAlice += num
    }
    for(var num of B) {
        sumBob += num
        record_bob.add(num)
    }
    var diffAlice = sumAlice - (sumAlice + sumBob) / 2
    for(var num of A) {
        if (record_bob.has(num - diffAlice)) {
            return [num, num - diffAlice]
        }
    }
};