var express = require('express');
var router = express.Router();
var Books = require('../modules/books');


/* GET booksInfo listing. */
router.get('/show', function(req, res, next) {
  
  

  Books.listAll(function(err,books){
    if(err){
      console.log(err);
    }
    else{ res.json({books:books});}
  }
  )
});

router.post('/findByName',function(req,res,next){
  console.log('findByName');
  console.log(req.body);
  console.log(typeof(req.body.bookName));
  Books.findByName(req.body.bookName, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        res.send('书目不存在');
      }else{
        res.json(results);
      }
    }
  })
});

router.post('/updateBookCount',function(req,res,next){
  console.log('updateBookCount');
  console.log(req.body);
  console.log(typeof(req.body.bookName));
  Books.findByName(req.body.bookName,req.body.counts, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      res.send(true);
    }
  })
});

router.post('/deleteByName',function(req,res,next){
  console.log('deleteByName');
  console.log(req.body);
  console.log(typeof(req.body.bookName));
  Books.findByName(req.body.bookName, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      res.send(true);
    }
  })
});

module.exports = router;