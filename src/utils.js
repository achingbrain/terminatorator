import {
  resolve
} from 'path'

export function normalisePath (input, session) {
  let path = input

  if (path.substring(0, 2) === '~/') {
    path = `${session.env.HOME}/${path.substring(2)}`
  }

  if (path.substring(0, 1) !== '/') {
    path = `${session.env.PWD}/${path}`
  }

  path = path.replace(/\/+/g, '/')
  path = path.replace(/^\/+/g, '').replace(/\/+$/g, '')
  path = `/${path}`

  path = resolve(path)

  return path
}
