interface Data {
  group: number
  name: string
}

const data: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
]

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
  return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let currEl = map[itemKey]
    if (Array.isArray(currEl)) {
      currEl.push(item)
    } else {
      currEl = [item]
    }
    map[itemKey] = currEl
    return map
  }, {})
}

const res = group<Data>(data, 'group')
console.log(res)
