interface IUserServiceApp {
  users: number
  getUserInDb(): number
}

// @setUsersAdvance(55)
@setUser(22)
@log()
class UserServiceApp implements IUserServiceApp {
  users: number

  getUserInDb(): number {
    return this.users
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0
}

function setUsersAdvance(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}

function setUser(users: number) {
  console.log('setUser init')
  return (target: Function) => {
    console.log('setUser run')
    target.prototype.users = users
  }
}

function log() {
  console.log('log init')

  return (target: Function) => {
    console.log('log run')
  }
}

function treeUserAdvance<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3
  }
}

console.log(new UserServiceApp().getUserInDb())

// setUser init
// log init
// log run
// setUser run
// 22
