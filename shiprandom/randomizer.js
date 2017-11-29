function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function generateShip(rowLength, colLength, shipwidth, callback) {

  let arr = []

  for (let i = 0; i < rowLength; i++) {
    arr.push([])
    for (let j = 0; j < colLength; j++) {
      arr[i].push('')
    }
  }

  let direction = ''
  let score = getRandom(1, 4)
  let initial = getRandom(0, ((rowLength * colLength) - 1))
  let row = Math.floor(initial / 10)
  let col = initial % 10
  let result = -1

  if (score == 1) {
    direction = 'left'
  } else if (score == 2) {
    direction = 'up'
  } else if (score == 3) {
    direction = 'right'
  } else {
    direction = 'bot'
  }

  if (direction == 'left') {
    result = col - shipwidth
  } else if (direction == 'right') {
    result = col + shipwidth
  } else if (direction == 'up') {
    result = row - shipwidth
  } else {
    result = row + shipwidth
  }

  if ((result < 0) || (result >= arr.length || result >= arr[0].length)) {
    condition = false
  } else {

    let pos = []

    if (direction == 'left') {

      for (i = col; i > result; i--) {
        arr[row][i] = "badan"
        pos.push([row, i])
      }
    } else if (direction == 'right') {

      for (i = col; i < result; i++) {
        arr[row][i] = "badan"
        pos.push([row, i])
      }
    } else if (direction == 'up') {

      for (i = row; i > result; i--) {
        arr[i][col] = "badan"
        pos.push([i, col])
      }
    } else {

      for (i = row; i < result; i++) {
        arr[i][col] = "badan"
        pos.push([i, col])
      }
    }
    callback(pos)
  }
}

module.exports = generateShip