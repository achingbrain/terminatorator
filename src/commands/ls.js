import fs from '../system/fs'
import users from '../system/users'
import groups from '../system/groups'

function calculatePerms (perms, position) {
  const calc = {
    world: (perm) => {
      return `000${perm}`
    },
    group: (perm) => {
      return `00${perm}0`
    },
    user: (perm) => {
      return `0${perm}00`
    }
  }

  if ((perms & parseInt(calc[position]('7'), 8)) === parseInt(calc[position]('7'), 8)) {
    return 'rwx'
  } else if ((perms & parseInt(calc[position]('6'), 8)) === parseInt(calc[position]('6'), 8)) {
    return 'rw-'
  } else if ((perms & parseInt(calc[position]('5'), 8)) === parseInt(calc[position]('5'), 8)) {
    return 'r-x'
  } else if ((perms & parseInt(calc[position]('4'), 8)) === parseInt(calc[position]('4'), 8)) {
    return 'r--'
  } else if ((perms & parseInt(calc[position]('3'), 8)) === parseInt(calc[position]('3'), 8)) {
    return '-wx'
  } else if ((perms & parseInt(calc[position]('2'), 8)) === parseInt(calc[position]('2'), 8)) {
    return '-w-'
  } else if ((perms & parseInt(calc[position]('1'), 8)) === parseInt(calc[position]('1'), 8)) {
    return '--x'
  }

  return '---'
}

export default {
  handler: (args, session) => {
    const node = fs.getNode(args._[0] || session.env.PWD, session)

    if (!node) {
      throw new Error(`read: ${args._[0]}: No such file or directory`)
    }

    let files

    if (node.content !== undefined) {
      files = [{
        name: path.split('/').pop(),
        node: node
      }]
    } else {
      files = Object.keys(node.children)
      .map(name => {
        return {
          name: name,
          node: node.children[name]
        }
      })
    }

    files = files.sort((a, b) => a.name.localeCompare(b.name))

    if (!args.a) {
      files = files.filter(file => file.name.substring(0, 1) !== '.')
    }

    if (args.l) {
      return `
      <table><tbody>
        ${
  files
    .map(child => {
      const node = child.node
      const date = node.mtime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })

      let perms = ''

      if (node.children) {
        perms += 'd'
      } else {
        perms += '-'
      }

      perms += calculatePerms(node.perms, 'user')
      perms += calculatePerms(node.perms, 'group')
      perms += calculatePerms(node.perms, 'world')

      return `<tr>
              <td>${perms}&nbsp;</td>
              <td>${users.find(node.uid).name}&nbsp;</td>
              <td>${groups.find(node.gid).name}&nbsp;</td>
              <td>${node.size()}&nbsp;</td>
              <td>${date}&nbsp;</td>
              <td>${child.name}</td>
            </tr>`
    }).join('')
}
      <tbody></table>`
    }

    return files
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(file => file.name)
      .join(' ')
  },
  args: {
    boolean: [
      'l',
      'a'
    ]
  }
}
