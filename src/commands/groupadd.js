import groups from '../system/groups'

export default {
  handler: (args, session) => {
    if (!args._.length) {
      throw new Error('groupadd: args required')
    }

    groups.add(args._[0])
  }
}
