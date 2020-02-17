//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Test CICD DWT!')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('La web esta en el puerto 8081!')
})
