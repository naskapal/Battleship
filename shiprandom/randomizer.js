const express = require('express'),
  bodyParser = require('body-parser'),
  app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));


app.post('/', generateShip)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function generateShip({
  body
}, res) {

  let shipwidth = body.width
  let condition = false
  let arr = []
  let min = 0
  let maxVertical = 10
  let maxHorizontal = 10
  let ships = [];

  for (let i = 0; i < maxVertical; i++) {
    arr.push([])
    for (let j = 0; j < maxHorizontal; j++) {
      arr[i].push('')
    }
  }

  while (condition === false) {

    let direction = ''
    let score = getRandom(1, 4)
    let initial = getRandom(0, ((maxVertical * maxHorizontal) - 1))
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

      let obj = {
        bodies: [],
        direction: ''
      }

      if (direction == 'left') {

        for (i = col; i > result; i--) {
          arr[row][i] = "badan"
          obj.bodies.push([row,i])
          obj.direction = 'horizontal'
        }
      } else if (direction == 'right') {

        for (i = col; i < result; i++) {
          arr[row][i] = "badan"
          obj.bodies.push([row, i])
          obj.direction = 'horizontal'
        }
      } else if (direction == 'up') {

        for (i = row; i > result; i--) {
          arr[i][col] = "badan"
          obj.bodies.push([row, i])
          obj.direction = 'vertical'
        }
      } else {

        for (i = row; i < result; i++) {
          arr[i][col] = "badan"
          obj.bodies.push([row, i])
          obj.direction = 'vertical'
        }
      }
      ships.push(obj)
      condition = true
      res.send(ships)
    }
  }
}

app.listen(3000, function () {
  console.log("dia berlari")
})