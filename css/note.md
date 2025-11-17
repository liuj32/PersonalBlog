# CSS

## 改善CSS的10种最佳做法
https://mp.weixin.qq.com/s/4euD4SiogTTxHVjKR6tNcw

## css中的子元素中的百分比（%）到底是谁的百分比
https://www.cnblogs.com/sundance123/p/13893002.html

## 块级元素与行内元素区别
参考：https://www.cnblogs.com/zhangxinxin111/p/4701653.html
块级元素：

行内元素：
  不换行
  宽高不生效
  padding属性top,left,bottom,right都会生效;但是给内联元素设置padding-top属性最多只会撑高到浏览器顶部，不会影响垂直位置。
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

## 换行
参考：https://juejin.cn/post/6959833102403239966#heading-4
默认：
  1、块内文字默认效果：在一行内一个单词单词无法完整放下时，这个单词会放到下一行。
  2、在一行内，如长度超过了容器的宽度，单词末尾部果只有一个单词，且单词的分会溢出，而不会放到下一行。

1. overflow-wrap
与word-wrap效果类似，只不过是css3新属性，为了兼容性尽量将两者写上。

属性值：
  normal
  break-word: 一行内超过的部分会换行。

2. word-break
属性值：
  normal
  keep-all: 只能在半角空格或连字符处换行。
  break-all: 若行内最后一个单词无法完整放下时，将多余的字母放到下一行。

3. white-space
属性值：
  normal
  pre: 类似pre标签
  pre-wrap: 保留空白符序列，但是正常地进行换行。
  pre-line: 合并空白符序列，但是保留换行符。
  nowrap: 文本不会换行，// 通常搭配末尾块效果(去查看)
  inherit

