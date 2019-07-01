
module.exports = {
  handler: (args, session) => {
    return Object.keys(session.env).map(key => {
      return `${key}=${session.env[key]}`
    })
  }
}
