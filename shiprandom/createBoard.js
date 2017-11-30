const createBoard = function (callback) {

  // debugger 

  let width = 10
  let height = 10
  let arr = []

  for (let i = 0; i < width; i++) {
    arr.push([])
    for (let j = 0; j < height; j++) {
      arr[i].push('')
    }
  }

  // debugger
  callback(arr)
}

module.exports = createBoard