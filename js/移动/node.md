## 拖拽相关事件
概念：拖放是由拖动与释放两部分组成，拖放事件也分为被拖动元素的相关事件，和容器的相关事件。

* 被拖动元素的相关事件如下所示：
ondragstart： 用户开始拖动元素时触发
ondrag：元素正在拖动时触发
ondragend：完成拖动后触发

* 容器相关事件：
ondragenter：被拖动的对象进入容器范围内触发
ondragover：被拖动的对象在另一容器范围内拖动时触发
ondragleave：被拖动的对象离开容器范围内触发
ondrop：拖动过程中，释放鼠标键时触发

* 注意：
1. 需要给被拖动的对象添加draggable="true"属性，false不可拖动，图片和链接默认是可拖动的。
2. 默认情况下，是无法将一个元素放置到另外一个元素里面的，如果需要则要在ondragover事件上加上 e.preventDefault() 方法来阻止默认行为。

* 插件
1. vue插件：vuedraggable
