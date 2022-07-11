const THEMES = [
  'interlaced',
  'modern',
  'white'
]

export default {
  handler: async (args, session) => {
    if (args.help) {
      await session.api.print('theme: available: ' + THEMES.join(', '))
      return
    }

    if (!args._.length) {
      session.api.getTheme()
      return
    }

    if (THEMES.includes(args._[0])) {
      session.api.setTheme(args._[0])
      return
    }

    throw new Error('error: theme: invalid theme')
  }
}
