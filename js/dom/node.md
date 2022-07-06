## DOM
什么叫dom? 文档对象模型，提供了对文档的结构化描述。
元素类型nodetype：1-Element元素，2-Attribute属性，3-Text文本
Dom创建节点：
  document.createElement
  document.createTextNode

Dom查询：
  document.querySelector
  document.querySelectorAll
  document.getElementById
  document.getElementByClassName
  document.getElementByTagName
获取父元素：ele.parentElement
获取父节点：ele.parentNode
获取子元素：ele.children
获取子节点：ele.childNodes
获取当前元素的第一个儿子节点: ele.firstElementChild
获取当前元素的最后一个儿子节点: ele.lastElementChild
获取上一个兄弟元素节点: ele.previousElementSibling
获取下一个兄弟元素节点: ele.nextElementSibling

Dom更改：
  添加子元素：ele.appendChild(el)
  删除子元素：ele.removeChild(el)
  替换子元素：ele.replaceChild(新, 旧)
  插入子元素：ele.insertBefore(newEle, referenceEle)

属性操作：
  获取属性数组：ele.attributes
  获取某一个属性：ele.getAttribute('class')
  设置某一个属性：ele.setAttribute('class', 'value')
  是否有某一个属性：ele.hasAttribute('class')
  移除某一个属性：ele.removeAttribute('class')
  是否有属性设置：ele.hasAttributes()
  textContent: 包含前后空格
  innerHTML：内部html  
  outerHTML：外部html，包含标签
  innerText：内部文本
  outerText：内部文本
  innerHTML和innerText: 转换标签
  textContent和innerText：textContent会获取纯文本内容，innerText实际展示内容文本（加个隐藏属性可以区分）
  innerText和outerText区别：获取相同，但在设置时，innerText仅设置标签所包含的文本，而outerText设置包含包括标签自身在内的文本