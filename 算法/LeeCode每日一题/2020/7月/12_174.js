/**
 * 
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var dp = []
    var row = dungeon.length, col = dungeon[0].length
    for(var i = 0;i<=row;i++) {
        dp[i] = []
    }

    for(var i = row-1;i>=0;i--) {
        for(var j=col-1;j>=0;j--) {
     		if(i==row-1&&j==col-1){ //终点的情况
                dp[i][j]=Math.max(1, 1-dungeon[i][j]);
            }else if(i==row-1){ //最后一行的情况
                dp[i][j]=Math.max(1, dp[i][j+1]-dungeon[i][j]);
            }else if(j==col-1){ //最后一列的情况
                dp[i][j]=Math.max(1, dp[i+1][j]-dungeon[i][j]);
            }else{	
                dp[i][j]=Math.max(1, Math.min(dp[i+1][j],dp[i][j+1])-dungeon[i][j]);
            }
        }
    }
   
   return dp[0][0]
};