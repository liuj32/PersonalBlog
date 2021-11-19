/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    var m = employees.length
    var recordMap = new Map()
    for(var i=0;i<m;i++) {
        recordMap.set(employees[i].id, { value: employees[i].importance, child: employees[i].subordinates})
    }
    var res = 0
    var dfs = (id) => {
        const item = recordMap.get(id)
        res += item.value
        var child = item.child
        for(var i = 0;i<child.length;i++) {
            var childId = child[i]
            dfs(childId)
        }
    }
    dfs(id)
    return res
};