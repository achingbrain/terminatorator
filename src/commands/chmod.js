const fs = require('../system/fs')

const setPerms = (node, perms) => {
  node.perms = perms

  Object.keys(node.children || {})
    .forEach(key => {
      setPerms(node.children[key], perms)
    })
}

module.exports = {
  handler: (args, session) => {
    if (args._.length !== 2) {
      throw new Error('usage: chmod [-fhv] [-R [-H | -L | -P]] [-a | +a | =a  [i][# [ n]]] mode|entry file ...')
    }

    const mode = args._[0]
    const path = args._[1]

    const perms = parseInt(mode, 8)

    if (isNaN(perms) || (perms === 0 && !`${mode}`.match(/^(0)+$/)) || perms > parseInt('0777', 8)) {
      throw new Error(`chmod: chmod: Invalid file mode: ${mode}`)
    }

    let node = fs.getNode(path, session)

    if (!node) {
      throw new Error(`chmod: ${path}: No such file or directory`)
    }

    node.perms = perms

    if (args.R) {
      setPerms(node, perms)
    }
  },
  args: {
    boolean: [
      'R'
    ],
    string: [
      0
    ]
  }
}
