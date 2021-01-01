## 关于dom的api有什么
> https://juejin.im/post/5af43bd5f265da0b8336c6f7#heading-9

1. 节点创建型api
  document.createElement(tagName)、document.createTextNode(data)、node.cloneNode(deep)、
  document.createDocumentFragment()、
2. 页面修改型API
  parent.appendChild(child)、 parentNode.insertBefore(newNode,refNode)、
  parent.removeChild(node)、  parent.replaceChild(newChild,oldChild)
3. 节点查询型API
  document.getElementById(id)、 document.getElementsByTagName(name)、
  document.getElementsByName(name) 、document.getElementsByClassName(names)
  document.querySelector(selectors)、document.querySelectorAll(selectors)
4. 节点关系型api
  parentNode、parentElement、 childNodes、children、firstChild、lastChild、hasChildNodes、
  previousSibling、 previousElementSibling、nextSibling、nextElementSibling

1. 元素属性型api
  element.setAttribute(name, value)、element.getAttribute(attributeName)
   element.removeAttribute(attrName)、
6. 元素样式型api
  window.getComputedStyle(element[, pseudoElt])
  element.getBoundingClientRect()、
  elem.style.color = 'red'
  elem.style.setProperty('font-size', '16px')
  elem.style.removeProperty('color')