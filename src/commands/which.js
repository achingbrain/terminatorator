
module.exports = {
  handler: ({ _ }, session) => {
    let cmd = _[0]
    const prefix = session.env.PATH.split(':')
      .find(prefix => {
        if (session.commands[`${prefix}/${cmd}`]) {
          return true
        }
      })
    cmd = `${prefix}/${cmd}`

    if (session.commands[cmd]) {
      return cmd
    }
  }
}
