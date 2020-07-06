# h5适配

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

设备像素比(dpr) ＝ 物理像素 / 设备独立像素(css像素)

2倍图就是dpr = 2

/* 工具函数，使用reference引用 */

@fontSize: 37.5; // rem基础字号
@dpr: 2; // 以2倍图的设计稿来写

.px2rem(@name, @px) {
  @{name}: @px / @fontSize / @dpr * 1rem;
}

document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
