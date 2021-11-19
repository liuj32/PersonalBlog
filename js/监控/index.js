  ;(function() {
      function loadMonitor() {
          var mnt = document.createElement('script')
          mnt.src = '//marketres.ssjlicai.com/act/common/monitor.min.js'
          mnt.async = true
          var s = document.getElementsByTagName('script')[0]
          s.parentNode.insertBefore(mnt, s)
      }

      window._mntError = []
      window._mntApi = []
      window.onerror = function(info, jsLink, row, col, error) {
          // 放到异步队列, 避免堵塞
          setTimeout(function() {
              window._mntError.push({info: info, jsLink: jsLink, row: row, col: col, error: error, timestamp: Date.now()}
          )}, 0)
      }

      loadMonitor()
  })()