type UserRoles = {
  customers?: Modifier
  projects?: Modifier
  adminPanel?: Modifier
}

type Modifier = 'read' | 'update' | 'create'

type ModifierToAccess<Type> = {
  [Property in keyof Type]-?: boolean
}

// Mapped types
type UserAccess2 = ModifierToAccess<UserRoles>

// type UserAccess1 = {
//   customers?: boolean
//   projects?: boolean
//   adminPanel?: boolean
// }
