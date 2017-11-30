const express = require('express'),
  bodyParser = require('body-parser'),
  createBoard = require('./createBoard'),
  fillBoard = require('./fillBoard')
app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get('/', createAndFillBoard)



function createAndFillBoard (req, res) {
  // debugger
  createBoard(function (emptyBoard) {
    fillBoard(emptyBoard, function (filledBoard) {
      debugger
      res.send(filledBoard)
    })
  })
}


app.listen(3000, function () {
  console.log("dia berlari")
})