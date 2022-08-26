1. 设置相同的域
document.domain = document.domain.split('.').slice(-2).join('.')

2.
子容器：
  // 重置商品信息
  setGoods(goods: Goods) {
    this.goods = goodsAdapter(goods)
  },
  created() {
    window.zdmSetGoods = this.setGoods
    const data = window.parent.opmsQueryGoodsDetail()
    this.goods = goodsAdapter(data)
  }

父容器：
  this.setDomain()
  window.opmsQueryGoodsDetail = this.getGoods // 初始化h5数据

  /**
   * 描述：获取表单数据
   */
  getGoods() {
    return this.tmpObj
  },
  setGoods() {
    const iframeEl = this.$refs.iframe
    iframeEl.contentWindow.zdmSetGoods(this.tmpObj)
  },