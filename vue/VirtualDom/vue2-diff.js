function vue2Diff(prevChildren, nextChildren, parent) {
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newEndIndex];
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (oldStartNode === undefind) {
      // 最后当旧列表遍历到undefind时就跳过当前节点。
      oldStartNode = prevChildren[++oldStartIndex]
    } else if (oldStartNode.key === newStartNode.key) {
      oldStartIndex++
      newStartIndex++
    } else if (oldEndNode.key === newEndNode.key) {
      oldEndIndex--
      newStartIndex--
    } else if (oldStartNode.key === newEndNode.key) {
      oldStartIndex++
      newEndIndex--
    } else if (oldEndNode.key === newStartNode.key) {
      oldEndIndex--
      newStartIndex++
    } else {
      // 在旧列表中找到/未找到和新列表头节点key 相同的节点
      let newtKey = newStartNode.key,
      oldIndex = prevChildren.findIndex(child => child.key === newKey);

      if (oldIndex > -1) {
        let oldNode = prevChildren[oldIndex];
        patch(oldNode, newStartNode, parent)
        parent.insertBefore(oldNode.el, oldStartNode.el)
        prevChildren[oldIndex] = undefined
      } else {
        mount(newStartNode, parent, oldStartNode.el)
      }
      newStartNode = nextChildren[++newStartIndex]
    } 
  }

  if (oldEndIndex < oldStartIndex) {
    // 添加节点
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      mount(nextChildren[i], parent, prevStartNode.el)
    }
  } else if (newEndIndex < newStartIndex) {
    // 移除节点
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      if (prevChildren[i]) {
        partent.removeChild(prevChildren[i].el)
      }
    }
  }
}