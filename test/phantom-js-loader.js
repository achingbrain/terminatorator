var fs = require('fs')

var page = new WebPage()

var file = fs.absolute('test/index.html')

page.onConsoleMessage = function (msg) {
  console.log(msg)
  if (/^Tests completed in/.test(msg)) {
    phantom.exit(page.evaluate(function () {
      if (window.QUnit && QUnit.config && QUnit.config.stats) {
        return QUnit.config.stats.bad || 0
      }
      return 1
    }))
  }
}

page.open('file://' + file, function (status) {
  if (status !== 'success') {
    console.log('FAIL to load the address')
    phantom.exit(1)
  }
})
