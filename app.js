var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello! This is NodeJS Sample 01 - NODESAMPLE01 - kube8')
})

app.listen(3000, function () {
  console.log('Example NODESAMPLE01 app listening on port 3000!')
})