import fs from '../system/fs'

export default {
  handler: (args, session) => {
    let node = fs.getNode(args._[0], session)

    if (!node) {
      throw new Error(`cat: ${args._[0]}: No such file or directory`)
    }

    if (node.children) {
      throw new Error(`cat: ${args._[0]}: Is a directory`)
    }

    return `<pre>${node.content}</pre>`
  }
}
