import pkg from '../../package.json'

export default {
  handler: (args, session) => {
    return pkg.version
  }
}
