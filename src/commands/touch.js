const fs = require('../system/fs')
const users = require('../system/users')

module.exports = {
  handler: (args, session) => {
    const { _ } = args

    if (!_.length) {
      throw new Error('usage: touch [-A [-][[hh]mm]SS] [-acfhm] [-r file] [-t [[CC]YY]MMDDhhmm[.SS]] file ...')
    }

    fs.write(_[0], '', session, {
      uid: users.find(session.USER).uid,
      gid: users.find(session.USER).gid
    })

    return ''
  }
}
