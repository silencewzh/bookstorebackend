var express = require('express');
var router = express.Router();
var Users = require('../modules/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var user1=new Users;
  user1.id=1234;
  user1.name="lisi"
  user1.save(function(err){
    if(err){console.log(err);}
    else{res.send('create successfully');}
  });
  
});
router.get('/show', function(req, res, next) {
  
  

  Users.listAll(function(err,users){
    if(err){
      console.log(err);
    }
    else{ res.json({users:users});}
  }
  )
});

router.post('/',function(req,res,next){

});

module.exports = router;
