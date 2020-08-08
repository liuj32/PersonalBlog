/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return []

    var iLen = matrix.length, jLen = matrix[0].length
    var record;
    record = [...Array(iLen)].map(() => [])

    var i = 0, j = 0, step = 1, bound = 1
    var ans = [], nums = iLen * jLen
    while(nums) {
        if(bound++ % 2 == 1) {
            step = 1
        } else {
            step = -1
        }
        while(j>=0 && j<jLen && nums) {
            if (record[i][j]) {
                 break;
            }
            record[i][j] = true
            ans.push(matrix[i][j])
            nums--
            j = j + step
        }
        j-=step
        i = i+step
        while(i>=0 && i<iLen && nums) {
            if (record[i][j]) {
                break
            }
            record[i][j] = true
            ans.push(matrix[i][j])
            i = i + step        
            nums--    
        }
        i -= step
        j -= step
    }

    return ans
};