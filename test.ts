class UserService {
  
  static db: any

  static getUser(id: number) {
    return UserService.db.findById(id)
  }
  create() {
    UserService.db
  }

  static {
    UserService.db = 'smth'
  }
}

UserService.getUser(2)

const inst = new UserService()
inst.create()
