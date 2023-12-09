const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
]

interface ID {
  id: number
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id

      default:
        return b.id - a.id
    }
  })
}

console.log(sort(data))
console.log(sort(data, 'desc'))
