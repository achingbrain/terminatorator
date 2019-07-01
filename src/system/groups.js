let nextGid = 0
const groups = {}

const groupApi = {
  add: (name) => {
    groups[nextGid] = {
      gid: nextGid,
      name
    }

    nextGid++
  },
  find: (id) => {
    if (typeof id === 'string' || id instanceof String) {
      return Object.values(groups).find(g => g.name === id)
    }

    return groups[id]
  }
}

module.exports = groupApi
