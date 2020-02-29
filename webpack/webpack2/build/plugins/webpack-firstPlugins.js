class firstPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    console.log('compiler')
    console.log(compiler)
    compiler.plugin('emit', (compilation, callback) => {
      let str = ""
      for(let fileName in compilation.assets) {
        str += `文件：${fileName} 大小${compilation.assets[fileName]['size']()}\n`
      }
      // 通过compilation.assets可以获取打包后静态资源信息，同样也可以写入资源
      compilation.assets['fileSize.md'] = {
        source: function() {
          return str
        },
        size: function() {
          return str.length
        }
      }
      callback()
    })
  }
}

module.exports = firstPlugin