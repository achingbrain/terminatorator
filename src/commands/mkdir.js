import fs from '../system/fs'
import users from '../system/users'

export default {
  handler: (args, session) => {
    const { _ } = args

    if (!_.length) {
      throw new Error('usage: mkdir [-pv] [-m mode] directory ...')
    }

    for (let i = 0; i < _.length; i++) {
      fs.mkdir(_[i], session, {
        uid: users.find(session.env.USER).uid,
        gid: users.find(session.env.USER).gid,
        parents: args.parents
      })
    }

    return ''
  },
  args: {
    boolean: [
      'p'
    ],
    alias: {
      parents: ['p']
    }
  }
}
