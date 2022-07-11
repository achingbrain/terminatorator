const THEMES = [
  'interlaced',
  'modern',
  'white'
]

export default {
  handler: async (args, session) => {
    if (args.help) {
      await session.api.print(THEMES.join(', '))
    }

    if (!args._.length) {
      session.api.getTheme()
      return
    }

    if (THEMES.includes(args._[0])) {
      session.api.setTheme(args._[0])
      return
    }

    throw new Error('theme: Invalid theme')
  }
}
