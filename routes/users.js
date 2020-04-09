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

router.post('/register',function(req,res,next){
  console.log('register');
  console.log(req.body);
  console.log(typeof(req.body.id));
  Users.distinctById(req.body.id, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        let user=new Users;
        user.id=req.body.id;
        user.password=req.body.password;
        user.save(function(err){
          if(err){
            console.log(err);
            res.send('create defeat')
          }
          else{res.send('create successfully');}
        });
      }else{
        res.send('该id已存在')
      }
    }
  })
});

router.post('/login',function(req,res,next){
  Users.findById(req.body.id, function(err, results){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      console.log(results);
      if (!results){
        res.send('该用户不存在')
      }else{
        console.log(req.body.password);
        console.log(results.password)
        if(req.body.password === results.password){
          res.send(true)
        }else{
          res.send('密码错误')
        }
      }
    }
  })
});

router.post('/refreshUserInfo',function(req,res,next){
  Users.refreshUserInfo(req.body.id, req.body.name, req.body.sex, function(err, rawResponse){
    if (!err) {
      console.log(rawResponse);
      res.send(true);
    } else {
      res.send(err);
    }
  })
});

router.post('/resetPassword',function(req,res,next){
  Users.resetPassword(req.body.id, req.body.password,function(err, rawResponse){
    if(err){
      res.send(err)
    }else{
      console.log(rawResponse);
      res.send(true);
    }
  })
});

router.post('/getShoppingCart',function(req,res,next){
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err)
    }else{
      res.json(result.cartBooks);
    }
  })
});

router.post('/refreshShoppingCart',function(req,res,next){
  Users.updateShoppingCart(req.body.id,req.body.cartBooks,function(err, result){
    if(err){
      res.send(err)
    }else{
      res.send(true)
    }
  })
});

router.post('/getUserPoints',function(req,res,next){
  console.log(req.body.id)
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err)
    }else{
      res.send(result.points)
    }
  })
});

router.post('/getHistory',function(req,res,next){
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err);
    }else{
      res.send(result.buyHistory);
    }
  })
});

module.exports = router;
