import groups from './groups'

let nextUid = 0
const users = {}

const userApi = {
  add: (name, home, group, supplementaryGroups) => {
    users[nextUid] = {
      uid: nextUid,
      gid: groups.find(group).gid,
      name,
      home,
      groups: supplementaryGroups.map(group => groups.find(group).gid)
    }

    nextUid++
  },
  find: (id) => {
    if (typeof id === 'string' || id instanceof String) {
      return Object.values(users).find(user => user.name === id)
    }

    return users[id]
  },
  ids: (id) => {
    const result = userApi.find(id)

    if (result) {
      return {
        uid: result.uid,
        gid: result.gid
      }
    }
  }
}

export default userApi
