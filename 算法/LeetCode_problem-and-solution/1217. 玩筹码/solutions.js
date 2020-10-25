/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    var even = 0, odd = 0
    for(var i = 0;i<position.length;i++) {
        if (position[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return Math.min(even, odd)
};