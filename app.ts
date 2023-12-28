// interface IUserServiceApp {
//   users: number
//   getUserInDb(): number
// }

// class UserServiceApp implements IUserServiceApp {
//   users: number

//   @Log
//   getUserInDb(): number {
//     throw new Error('Ошибка')
//   }
// }

// function Log(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
//   console.log('target', target)
//   console.log('propertyKey', propertyKey)
//   console.log('descriptor', descriptor)

//   descriptor.value = () => {
//     console.log('No error here')
//   }
// }

// console.log(new UserServiceApp().getUserInDb())
