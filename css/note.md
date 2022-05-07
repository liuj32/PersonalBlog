# CSS

## 改善CSS的10种最佳做法
https://mp.weixin.qq.com/s/4euD4SiogTTxHVjKR6tNcw

## css中的子元素中的百分比（%）到底是谁的百分比
https://www.cnblogs.com/sundance123/p/13893002.html

## 块级元素与行内元素区别
块级元素：

行内元素：
  不换行
  宽高不生效
  padding-top、padding-bottom, margin-margin-bottom 不生效
  行内子元素行高比父级小，则父元素行高有效
  

## 三角形、圆
https://www.jb51.net/article/42513.htm

## 水平垂直居中
1. 行内元素，行高等于高度
2. 定高：-margin
3. 定高：absolute + margin: auto
4. absolute + transform
5. flex
6. tabel-cell

## flex属性
1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content
-----------------
7. order
8. flex-grow 放大比例，1-等比占据剩余空间
9. flex-shrink 缩小比列，1-等比缩小
10. flex-basis 占据的主轴空间，（若主轴为水平，相当于设置项目的宽度，原width将会失效，flex-basis/width可与flex-grow叠加宽度）
    width: 500px; flex: 0 1 auto; 容器宽度大于500px，元素的宽度就为500px, 不参与分配剩余空间, 否则元素缩放。
11. flex
12. align-self

## 定位方式
absolute：离自己最近的不是static的父元素进行定位，因为元素默认是static

## background
* 保持图像比列，填充全屏：cover
* 保持图像比列，适应屏幕：contain
* 不保持图像比列，拉伸全屏：fill

## 动画
一. animation
name
duration
timing-function
delay
iteration-count
direaction： 
fill-mode：forwards 动画结束后的状态
play-state: running/pause 进行/暂停
二. transition
property
duration
timing-function
delay
三. transform: 将元素旋转，缩放，移动，倾斜
translate 移动
scale 缩放
rotate 旋转
skew(0deg, 0deg) 倾斜转换，X，Y轴拉伸

transform-origin: xx, 只针对rotate|scale|skew有效？
rotate|scale|skew 默认转换点(不动的支点)为：center center