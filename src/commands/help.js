import pkg from '../../package.json'

export default {
  handler: () => {
    return [
      `${pkg.name}@${pkg.version} - ${pkg.description}`,
      ' ',
      'Run `echo $PATH` and `ls` some of the paths for available commands'
    ]
  }
}
