const StateEnums = {
  Remove: 'remove',
  Insert: 'insert',
  Move: 'move',
  ChangeProps: 'changeProps',
  Replace: 'replace',
}

const isString = (value) => {
  return typeof value === 'string'
}

const move = (list, i, j) => {
  [list[i], list[j]] = [list[j], list[i]]
}

// export {
//   StateEnums,
//   isString,
//   move,
// }