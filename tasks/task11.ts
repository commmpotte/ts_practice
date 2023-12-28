interface IUserServiceApp {
  users: number
  getUserInDb(): number
}

class UserServiceApp implements IUserServiceApp {
  users: number

  @Catch({ rethrow: true })
  getUserInDb(): number {
    throw new Error('Error')
  }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: true }) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value
    descriptor.value = (...args: any[]) => {
      try {
        return method?.apply(target, args)
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
          if (rethrow) {
            throw e
          }
        }
      }
    }
  }
}

console.log(new UserServiceApp().getUserInDb())
