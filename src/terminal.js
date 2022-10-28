'use strict'

import './terminal.less'

import parser from 'yargs-parser'
import boot from './system/boot'
import pkg from '../package.json'
import fs from './system/fs'

const KEYS = {
  ENTER: 13,
  ESCAPE: 27,
  TAB: 9,
  K: 75,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}

const commands = {
  '/usr/bin/cat': require('./commands/cat').default,
  '/usr/bin/cd': require('./commands/cd').default,
  '/bin/chmod': require('./commands/chmod').default,
  '/usr/bin/env': require('./commands/env').default,
  '/bin/groupadd': require('./commands/groupadd').default,
  '/usr/local/bin/help': require('./commands/help').default,
  '/bin/ls': require('./commands/ls').default,
  '/bin/mkdir': require('./commands/mkdir').default,
  '/bin/pwd': require('./commands/pwd').default,
  '/bin/rm': require('./commands/rm').default,
  '/usr/bin/su': require('./commands/su').default,
  '/usr/local/bin/theme': require('./commands/theme').default,
  '/usr/bin/touch': require('./commands/touch').default,
  '/bin/useradd': require('./commands/useradd').default,
  '/usr/local/bin/version': require('./commands/version').default,
  '/usr/bin/which': require('./commands/which').default,
  '/usr/bin/whoami': require('./commands/whoami').default,
  '/bin/echo': require('./commands/echo').default,
  [`/bin/${pkg.name}`]: require('./commands/terminatorator').default
}

const motd = `<pre>
 _______                  _             _                  _
|__   __|                (_)           | |                | |
   | | ___ _ __ _ __ ___  _ _ __   __ _| |_ ___  _ __ __ _| |_ ___  _ __
   | |/ _ | '__| '_ \` _ \\| | '_ \\ / _\` | __/ _ \\| '__/ _\` | __/ _ \\| '__|
   | |  __| |  | | | | | | | | | | (_| | || (_) | | | (_| | || (_) | |
   |_|\\____|_|  |_| |_| |_|_|_| |_|\\__,_|\\__\\___/|_|  \\__,_|\\__\\___/|_|
</pre>
<br/>
Type \`help\` for help
<br/>
<br/>`

export async function createTerminal (container, options) {
  if (!container) {
    throw new Error('Container is required')
  }

  var defaults = {
    welcome: motd,
    theme: 'interlaced',
    commands: {},
    files: {},
    history: 'cli-history',
    user: 'alex'
  }

  options = options || {
    ...defaults
  }
  options.welcome = options.welcome || defaults.welcome
  options.theme = options.theme || defaults.theme
  options.commands = options.commands || defaults.commands
  options.user = options.user || defaults.user

  Object.keys(commands).forEach(key => {
    options.commands[key] = options.commands[key] || commands[key]
  })

  options.commands['/usr/bin/clear'] = {
    handler: clear
  }

  const session = {
    env: {
      USER: 'root',
      TERM_PROGRAM: `${pkg.name}@${pkg.version}`,
      SHELL: `/bin/${pkg.name}`,
      TERM: 'webterm',
      TMPDIR: '/tmp',
      PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/local/bin',
      PWD: '/root',
      HOME: '/root'
    },
    commands: options.commands,
    fs
  }

  var _history = window.localStorage[options.history] ? JSON.parse(window.localStorage[options.history]) : []
  var _histpos = _history.length
  var _histtemp = ''

  // Create terminal and cache DOM nodes
  var _terminal = container
  _terminal.classList.add('terminal')
  _terminal.classList.add('terminal-' + options.theme)
  _terminal.insertAdjacentHTML('beforeEnd', `
  <div class="background">
    <div class="interlace"></div>
  </div>
  <div class="container">
    <output></output>
    <table class="input-line">
      <tr>
        <td nowrap>
          <div class="prompt">${options.prompt}</div>
        </td>
        <td width="100%">
          <input class="cmdline" spellcheck="false" autofocus />
        </td>
      </tr>
    </table>
  </div>
  `)
  var _container = _terminal.querySelector('.container')
  var _inputLine = _container.querySelector('.input-line')
  var _cmdLine = _container.querySelector('.input-line .cmdline')
  var _output = _container.querySelector('output')
  var _prompt = _container.querySelector('.prompt')
  var _background = document.querySelector('.background')

  // Hackery to resize the interlace background image as the container grows.
  _output.addEventListener('DOMSubtreeModified', function (e) {
    // Works best with the scroll into view wrapped in a setTimeout.
    setTimeout(function () {
      _cmdLine.scrollIntoView()
    }, 0)
  }, false)

  _terminal.addEventListener('click', function (e) {
    _cmdLine.focus()
  }, false)

  _output.addEventListener('click', function (e) {
    e.stopPropagation()
  }, false)

  // Always force text cursor to end of input line.
  _cmdLine.addEventListener('click', inputTextClick, false)
  _inputLine.addEventListener('click', function (e) {
    _cmdLine.focus()
  }, false)

  // Handle up/down key presses for shell history and enter for new command.
  _cmdLine.addEventListener('keyup', historyHandler, false)
  _cmdLine.addEventListener('keydown', onKeyDown, true)

  function inputTextClick () {
    // Move cursor to end of input.
    _cmdLine.value = _cmdLine.value // eslint-disable-line
  }

  function historyHandler (e) {
    // Clear command-line on Escape key.
    if (e.keyCode === KEYS.ESCAPE) {
      _cmdLine.value = ''
      e.stopPropagation()
      e.preventDefault()
    }

    if (_history.length && (e.keyCode === KEYS.ARROW_UP || e.keyCode === KEYS.ARROW_DOWN)) {
      if (_history[_histpos]) {
        _history[_histpos] = _cmdLine.value
      } else {
        _histtemp = _cmdLine.value
      }

      if (e.keyCode === KEYS.ARROW_UP) {
        _histpos--

        if (_histpos < 0) {
          _histpos = 0
        }
      } else if (e.keyCode === KEYS.ARROW_DOWN) {
        _histpos++

        if (_histpos > _history.length) {
          _histpos = _history.length
        }
      }

      _cmdLine.value = _history[_histpos] ? _history[_histpos] : _histtemp

      // Move cursor to end of input.
      _cmdLine.value = _cmdLine.value // eslint-disable-line
    }
  }

  function onKeyDown (e) {
    if (cmdLineIsVisible()) {
      e.stopPropagation()
    }

    if (e.keyCode === KEYS.K && (e.ctrlKey || e.metaKey)) {
      return clear()
    }

    if (e.keyCode === KEYS.TAB) {
      return tabComplete(e)
    }

    if (e.keyCode === KEYS.ENTER) {
      const line = _cmdLine.value

      // Clear/setup line for next input.
      _cmdLine.value = ''
      return executeCommand(line)
    }
  }

  function clear () {
    _output.innerHTML = ''
    _background.style.minHeight = ''
  }

  async function output (html = '') {
    _prompt.classList.add('hidden')

    await _maybeAppendOutput(html)

    _prompt.classList.remove('hidden')
  }

  async function _maybeAppendOutput (html = '') {
    try {
      if ((html[Symbol.asyncIterator] || html[Symbol.iterator]) && typeof html !== 'string') {
        for await (let val of html) {
          await _maybeAppendOutput(val)
        }
      } else if (html.then) {
        const val = await html

        await _maybeAppendOutput(val)
      } else {
        _appendOutput(html)
      }
    } catch (err) {
      console.error(err)
      _appendOutput(err.message)
    }
  }

  function _appendOutput (val = '') {
    _output.insertAdjacentHTML('beforeEnd', val)

    if (val && val.trim().substr(-1) !== '>') {
      _output.insertAdjacentHTML('beforeEnd', '<br/>')
    }

    _cmdLine.scrollIntoView()
  }

  function cmdLineIsVisible () {
    let parent = _cmdLine.parentElement

    while (parent) {
      if ((parent.className || '').includes('active')) {
        return true
      }

      parent = parent.parentElement
    }
  }

  const api = {
    exec: (line, opts) => {
      return executeCommand(line, opts)
    },
    print: output,

    setTheme: (theme) => {
      _terminal.classList.remove('terminal-' + options.theme)
      options.theme = theme
      _terminal.classList.add('terminal-' + options.theme)
    },

    getTheme: async () => {
      await output(options.theme)
    }
  }

  session.api = api

  async function executeCommand (cmdline, opts = {}) {
    if (!opts.hidden) {
      // Save shell history.
      if (cmdline) {
        _history[_history.length] = cmdline
        window.localStorage[options.history] = JSON.stringify(_history)
        _histpos = _history.length
      }

      // Duplicate current input and append to output section.
      await output(`${options.prompt} ${cmdline}`)
    }

    if (!cmdline) {
      return
    }

    // Parse out command & args
    let args = parser(cmdline)
    let cmd = args._.shift()

    const prefix = session.env.PATH.split(':')
      .find(prefix => {
        if (options.commands[`${prefix}/${cmd}`]) {
          return true
        }
      })

    if (!prefix) {
      return output(cmd + ': command not found')
    }

    cmd = `${prefix}/${cmd}`

    const command = options.commands[cmd]

    if (command.args) {
      // reparse with command args
      args = parser(cmdline, command.args)
      // remove the command again
      args._.shift()
    }

    let ret

    try {
      session.env._ = cmdline

      const result = command.handler(args, session)
      ret = output(result)
    } catch (err) {
      console.error(err)
      ret = output(err.message)
    }

    if (!opts.hidden) {
      const history = '~/.bash_history'
      let contents = ''

      if (fs.getNode(history, session)) {
        contents = fs.read(history, session)
        contents += '\n'
      }

      contents += cmdline
      fs.write(history, contents, session)
    }

    await ret

    options.prompt = `${session.env.USER} ${session.env.PWD === session.env.HOME ? '~' : session.env.PWD.split('/').pop()} ${session.env.USER === 'root' ? '#' : '$'}`

    _prompt.innerHTML = options.prompt
  }

  function findNodeFromPartialPath (path) {
    if (!path) {
      return {
        node: session.fs.getNode(session.env.PWD),
        path: '',
        remainder: ''
      }
    }

    if (!path.endsWith('/')) {
      const parts = path.split('/')
      const remainder = parts.pop()

      return {
        node: session.fs.getNode(session.env.PWD + '/' + parts.join('/')),
        path: parts.join('/'),
        remainder
      }
    }

    path = path.replace(/\/\//g, '/')
    path = path.substring(0, path.length - 1)

    const node = session.fs.getNode(session.env.PWD + '/' + path)

    if (!node) {
      return {
        node: session.fs.getNode(session.env.PWD),
        path,
        remainder: path
      }
    }

    return {
      node,
      path,
      remainder: ''
    }
  }

  function tabComplete (e) {
    e.preventDefault()

    let args = parser(_cmdLine.value)
    args._ = args._.map(a => a.toString())

    if (args._.length === 0) {
      // no command?
      _cmdLine.value += '\t'
    } else if (args._.length === 1 && !_cmdLine.value.endsWith(' ')) {
      // complete command
      const commands = Object.keys(session.commands)
        .map(path => path.split('/').pop())
        .filter(cmd => cmd.startsWith(args._[0]))

      if (commands.length === 1) {
        if (_cmdLine.value !== commands[0]) {
          _cmdLine.value = commands[0]
        }
      } else {
        session.api.print(commands.join(' '))
      }
    } else {
      let partial = args._[args._.length - 1]

      // complete file argument
      let { node, path, remainder } = findNodeFromPartialPath(partial)

      if (node.children == null) {
        return
      }

      const children = Object.keys(node.children)
        .map(file => [path, file].filter(Boolean).join('/'))
        .filter(file => {
          if (file.split('/').pop().startsWith('.')) {
            // skip hidden files
            return false
          }

          if (args._.length === 1) {
            // only command, include everything
            return true
          }

          if (partial.endsWith('/')) {
            // return all directory contents
            return true
          }

          if (file.split('/').pop().startsWith(remainder)) {
            // it's a match!
            return true
          }

          return false
        })

      if (children.length === 1) {
        const candidate = children[0]

        // if the end of the command line string is already the candidate, maybe we'll add a / to it
        if (args._[args._.length - 1] === candidate) {
          const candidateNode = session.fs.getNode(session.env.PWD + '/' + candidate)

          if (candidateNode.children != null) {
            _cmdLine.value += '/'
          }
        } else if (args._.length === 1) {
          _cmdLine.value = [ ...args._, candidate ].join(' ')
        } else {
          _cmdLine.value = [ ...args._.slice(0, args._.length - 1), candidate ].join(' ')
        }
      } else {
        session.api.print(children.join(' '))
      }
    }
  }

  await boot(session, options)
  await output(options.welcome)

  return api
}
