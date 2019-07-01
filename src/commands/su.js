const users = require('../system/users')

module.exports = {
  handler: (args, session) => {
    if (!args._.length) {
      throw new Error('su: Args required')
    }

    const user = users.find(args._[0])

    if (!user) {
      throw new Error('su: Unknown user')
    }

    session.env.USER = user.name
    session.env.HOME = user.home

    return session.api.exec(`cd ${user.home}`, {
      hidden: true
    })
  }
}
