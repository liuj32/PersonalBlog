* [官方题解](https://leetcode-cn.com/problems/subrectangle-queries/solution/bu-bao-li-geng-xin-ju-zhen-yuan-su-de-jie-fa-by-li/)

给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。

题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。

例如:<br>
给定 BST [1,null,2,2],<br>

**示例1:**
```
输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
输出："Sao Paulo" 
解释：从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo"

**示例2:**
```
输入：paths = [["B","C"],["D","B"],["C","A"]]
输出："A"
解释：所有可能的线路是：
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
显然，旅行终点站是 "A" 。
```

**示例3: **
```
输入：paths = [["A","Z"]]
输出："Z"
```

来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/destination-city/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>