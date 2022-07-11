import users from './users'
import fs from './fs'

export default async function boot (session, options) {
  const execOpts = {
    hidden: true
  }

  await session.api.exec('groupadd root', execOpts)
  await session.api.exec('groupadd wheel', execOpts)
  await session.api.exec('groupadd staff', execOpts)
  await session.api.exec(`groupadd ${options.user}`, execOpts)

  await session.api.exec('useradd root -g root -G wheel,staff -h /root', execOpts)

  await session.api.exec(`su root`, execOpts)

  await session.api.exec('mkdir /home', execOpts)

  await session.api.exec(`useradd ${options.user} -g ${options.user} -G wheel,staff -h /home/${options.user}`, execOpts)

  await session.api.exec('mkdir /bin', execOpts)
  await session.api.exec('mkdir /boot', execOpts)
  await session.api.exec('mkdir /dev', execOpts)
  await session.api.exec('mkdir /etc', execOpts)
  await session.api.exec('mkdir /lib', execOpts)
  await session.api.exec('mkdir /mnt', execOpts)
  await session.api.exec('mkdir /opt', execOpts)
  await session.api.exec('mkdir /opt/local', execOpts)
  await session.api.exec('mkdir /opt/local/bin', execOpts)
  await session.api.exec('mkdir /proc', execOpts)
  await session.api.exec('mkdir /sbin', execOpts)
  await session.api.exec('mkdir /tmp', execOpts)
  await session.api.exec('mkdir -p /usr/include', execOpts)
  await session.api.exec('mkdir /usr/lib', execOpts)
  await session.api.exec('mkdir /usr/libexec', execOpts)
  await session.api.exec('mkdir -p /usr/local/src', execOpts)
  await session.api.exec('mkdir -p /usr/share', execOpts)
  await session.api.exec('mkdir -p /var/log', execOpts)
  await session.api.exec('mkdir -p /var/mail', execOpts)
  await session.api.exec('mkdir -p /var/spool', execOpts)
  await session.api.exec('mkdir -p /var/src', execOpts)
  await session.api.exec('mkdir -p /var/tmp', execOpts)

  Object.keys(options.commands)
    .forEach(command => {
      fs.write(command, options.commands[command].toString(), session, {
        ...users.ids('root'),
        parents: true
      })
    })

  await session.api.exec(`cd /home/${options.user}`, execOpts)
  await session.api.exec(`su ${options.user}`, execOpts)

  Object.keys(options.files)
    .forEach(path => {
      fs.write(path, options.files[path].content || '', session, {
        ...users.ids(options.files[path].owner || options.user),
        parents: true
      })
    })
}
