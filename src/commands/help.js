const pkg = require('../../package.json')

module.exports = {
  handler: (args, session) => {
    return [
      `${pkg.name}@${pkg.version} - ${pkg.description}`,
      ' ',
      'Run `ls -l /bin` for available commands'
    ]
  }
}
