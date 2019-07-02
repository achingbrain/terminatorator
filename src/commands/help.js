const pkg = require('../../package.json')

module.exports = {
  handler: () => {
    return [
      `${pkg.name}@${pkg.version} - ${pkg.description}`,
      ' ',
      'Run `echo $PATH` and `ls` some of the paths for available commands'
    ]
  }
}
