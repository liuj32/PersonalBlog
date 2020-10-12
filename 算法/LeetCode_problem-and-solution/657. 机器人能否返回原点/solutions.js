/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var count_R = 0, count_L = 0
        count_U = 0, count_D = 0
    for(var dir of moves) {
        switch(dir) {
            case 'R':
                count_R++
                break
            case 'L':
                count_L++
                break
            case 'U':
                count_U++
                break
            case 'D':
                count_D++
                break
            default:
        }
    }

    return count_L === count_R && count_U === count_D
};