
module.exports = {
  handler: (args, session) => {
    return session.env.USER
  }
}
