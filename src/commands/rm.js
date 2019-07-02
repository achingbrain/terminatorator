import fs from '../system/fs'

export default {
  handler: (args, session) => {
    const { _ } = args

    if (!_.length) {
      throw new Error('usage: rm [-f | -i] [-dPRrvW] file ... unlink file')
    }

    for (let i = 0; i < _.length; i++) {
      fs.rm(_[i], session, args)
    }

    return ''
  },
  args: {
    boolean: [
      'r',
      'f'
    ],
    alias: {
      recursive: ['r'],
      force: ['f']
    }
  }
}
