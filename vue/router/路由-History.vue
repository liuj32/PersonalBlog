<template>
  <div>
    <header>
      <a @click="changeRoute('home')" data-path="home">首页</a>
      <a @click="changeRoute('center')" data-path="center">个人中心页</a>
      <a @click="changeRoute('help')" data-path="help">帮助页</a>
    </header>    

    <section id="content"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    changeRoute(route) {
      let path = route
      /**
       * window.history.pushState(state, title, url)
       * state：一个与添加的记录相关联的状态对象，主要用于popstate事件。该事件触发时，该对象会传入回调函数。
       *        也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。
       *        如果不需要这个对象，此处可以填 null。
       * title：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
       * url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。
       */
      this.changePage(path)
      history.pushState({ content: path }, null, path)
    },
    changePage(pageContent) {
      let content = document.getElementById('content')
      content.innerText = pageContent
    }
  },
  mounted() {
    window.addEventListener('popstate', (e) => {
      console.log('popstate')
      let content = e.state && e.state.content;
      this.changePage(content);
    })
  }
}

</script>