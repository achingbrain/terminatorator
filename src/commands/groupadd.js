const groups = require('../system/groups')

module.exports = {
  handler: (args, session) => {
    if (!args._.length) {
      throw new Error('groupadd: args required')
    }

    groups.add(args._[0])
  }
}
