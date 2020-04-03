var express = require('express');
var router = express.Router();

/* GET booksInfo listing. */
router.get('/', function(req, res, next) {
  
  res.json({name:"zhangsan",sex:"male"});
});

module.exports = router;