
module.exports = {
  handler: (args, session) => {
    const echo = args._[0]

    if (!echo) {
      return ' '
    }

    if (echo.substring(0, 1) === '$') {
      const envVar = session.env[echo.substring(1)]

      return envVar || ' '
    }

    return echo
  }
}
