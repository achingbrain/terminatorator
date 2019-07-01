const fs = require('../system/fs')
const users = require('../system/users')

module.exports = {
  handler: (args, session) => {
    const { _ } = args

    if (!_.length) {
      throw new Error('usage: mkdir [-pv] [-m mode] directory ...')
    }

    for (let i = 0; i < _.length; i++) {
      fs.mkdir(_[i], session, {
        uid: users.find(session.env.USER).uid,
        gid: users.find(session.env.USER).gid,
        p: args.p
      })
    }

    return ''
  },
  args: {
    boolean: [
      'p'
    ]
  }
}
