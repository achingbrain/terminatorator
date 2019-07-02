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
  '/usr/bin/cat': require('./commands/cat'),
  '/usr/bin/cd': require('./commands/cd'),
  '/bin/chmod': require('./commands/chmod'),
  '/usr/bin/env': require('./commands/env'),
  '/bin/groupadd': require('./commands/groupadd'),
  '/usr/local/bin/help': require('./commands/help'),
  '/bin/ls': require('./commands/ls'),
  '/bin/mkdir': require('./commands/mkdir'),
  '/bin/pwd': require('./commands/pwd'),
  '/bin/rm': require('./commands/rm'),
  '/usr/bin/su': require('./commands/su'),
  '/usr/local/bin/theme': require('./commands/theme'),
  '/usr/bin/touch': require('./commands/touch'),
  '/bin/useradd': require('./commands/useradd'),
  '/usr/local/bin/version': require('./commands/version'),
  '/usr/bin/which': require('./commands/which'),
  '/usr/bin/whoami': require('./commands/whoami'),
  '/bin/echo': require('./commands/echo'),
  [`/bin/${pkg.name}`]: require('./commands/terminatorator')
}

const motd = `<pre>
 _______                  _             _                  _
|__   __|                (_)           | |                | |
   | | ___ _ __ _ __ ___  _ _ __   __ _| |_ ___  _ __ __ _| |_ ___  _ __
   | |/ _ | '__| '_ \` _ \\| | '_ \\ / _\` | __/ _ \\| '__/ _\` | __/ _ \\| '__|
   | |  __| |  | | | | | | | | | | (_| | || (_) | | | (_| | || (_) | |
   |_|\____|_|  |_| |_| |_|_|_| |_|\\__,_|\\__\\___/|_|  \\__,_|\\__\\___/|_|
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

  var _history = localStorage[options.history] ? JSON.parse(localStorage[options.history]) : []
  var _histpos = _history.length
  var _histtemp = ''

  // Create terminal and cache DOM nodes
  var _terminal = container
  _terminal.classList.add('terminal')
  _terminal.classList.add('terminal-' + options.theme)
  _terminal.insertAdjacentHTML('beforeEnd', [
    '<div class="background"><div class="interlace"></div></div>',
    '<div class="container">',
    '<output></output>',
    '<table class="input-line">',
    '<tr><td nowrap><div class="prompt">' + options.prompt + '</div></td><td width="100%"><input class="cmdline" spellcheck="false" autofocus /></td></tr>',
    '</table>',
    '</div>'].join(''))
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
    _cmdLine.value = _cmdLine.value
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
      _cmdLine.value = _cmdLine.value
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
      return tabComplete()
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
    _cmdLine.value = ''
    _background.style.minHeight = ''
  }

  async function output (html = '') {
    _inputLine.classList.add('hidden')

    if ((html[Symbol.asyncIterator] || html[Symbol.iterator]) && typeof html !== 'string') {
      try {
        for await (let val of html) {
          output(val)
        }
      } catch (err) {
        console.error(err)
        output(err.message)
      }
    } else if (html.then) {
      try {
        const val = await html

        output(val)
      } catch (err) {
        console.error(err)
        output(err.message)
      }
    } else {
      _output.insertAdjacentHTML('beforeEnd', html)

      if (html && html.trim().substr(-1) !== '>') {
        _output.insertAdjacentHTML('beforeEnd', '<br/>')
      }

      _cmdLine.scrollIntoView()
    }

    _inputLine.classList.remove('hidden')
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
    print: output
  }

  session.api = api

  async function executeCommand (cmdline, opts = {}) {
    if (!opts.hidden) {
      // Save shell history.
      if (cmdline) {
        _history[_history.length] = cmdline
        localStorage[options.history] = JSON.stringify(_history)
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
      fs.write(history, contents, session, {})
    }

    options.prompt = `${session.env.USER} ${session.env.PWD.split('/').pop()} ${session.env.USER === 'root' ? '#' : '$'}`

    _prompt.innerHTML = options.prompt

    return ret
  }

  function tabComplete () {

  }

  await boot(session, options)
  await output(options.welcome)

  return api
}
