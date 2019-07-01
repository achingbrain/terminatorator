const pkg = require('../../package.json')

module.exports = {
  handler: (args, session) => {
    return pkg.version
  }
}
