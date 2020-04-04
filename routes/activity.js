var express = require('express');
var router = express.Router();
var Activity = require('../modules/activity');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/show', function(req, res, next) {
  
  

  Activity.listAll(function(err,activities){
    if(err){
      console.log(err);
    }
    else{ res.json({activity:activities});}
  }
  )
});
module.exports = router;