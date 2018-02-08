var logger = require('../../util/logger')
var _ = require('lodash')

exports.params = function(){}

exports.get = function(req, res, next){
  res.json({'hello': 'world'})
}

exports.post = function(req, res, next){
  res.json({'hello':'world post'})
}