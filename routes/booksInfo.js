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

module.exports = router;