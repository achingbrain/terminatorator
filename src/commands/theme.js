
export default {
  handler: (args, session) => {
    if (!args._.length) {
      session.api.getTheme()
      return
    }

    if (args._[0].match(/^interlaced|modern|white$/)) {
      session.api.setTheme(args[0])
      return
    }

    throw new Error('theme: Invalid theme')
  }
}
