var express = require('express')
var app = express()
var api = require('./api/api')
var config = require('./config/config')
var logger = require('./util/logger')

var fs = require('fs');
var path = require('path');

// Point to static files directory
var distDir = path.join(__dirname, '..', 'frontend')
app.use(express.static(distDir))

// app.get('/', function(req, res){
//   console.log('Yo')
//   var indexHtmlPath = path.join(__dirname, '..', 'frontend', 'index.html')
//   res.sendFile(indexHtmlPath)
// })

app.use('/api', api)

app.use(function(err, req, res, next){
  if(err.name === 'UnauthorizedError'){
    res.status(401).send('Invalid token')
    return
  }

  logger.error(err.stack)
  res.status(500).send('Oops server error')
})

module.exports = app