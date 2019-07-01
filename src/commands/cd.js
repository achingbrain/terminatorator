const fs = require('../system/fs')

module.exports = {
  handler: ({ _ }, session) => {
    let path = _[0] || session.env.HOME
    const node = fs.getNode(path, session)

    if (!node) {
      throw new Error(`cd: ${path}: No such file or directory`)
    }

    session.env.PWD = path
  }
}
