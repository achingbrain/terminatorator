const users = require('../system/users')
const fs = require('../system/fs')

module.exports = {
  handler: (args, session) => {
    const name = args._[0]
    const {
      home,
      group,
      supplementalGroups
    } = args

    users.add(name, home, group, supplementalGroups.split(','))

    fs.mkdir(home, session, users.ids(name))

    fs.mkdir(`${home}/Documents`, session, users.ids(name))
    fs.mkdir(`${home}/Code`, session, users.ids(name))
    fs.write(`${home}/.bash_history`, '', session, users.ids(name))
    fs.write(`${home}/.bash_profile`, `source /etc/profile

    export NVM_DIR="/${home}}/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

    nvm use 10`, session, users.ids(name))
  },
  args: {
    alias: {
      'home': ['h'],
      'group': ['g'],
      'supplementalGroups': ['G']
    }
  }
}
