# bookstorebackend

npm install 安装依赖

npm start 启动服务端



添加路由：

在/routers目录下新建路由js文件 如users.js

```


var express = require('express');

var router = express.Router();



/* GET users listing. */

router.get('/', function(req, res, next) {

 res.send('respond with a resource');

});



module.exports = router;
```

再在app.js中引入

`var usersRouter = require('./routes/users');`

`app.use('/getInfo',getInfoRouter);`



连接数据库:

`var mongoose=require('mongoose');`

`mongoose.connect('mongodb://localhost/myDB') //连接本地数据库`

数据集模块: /schemas

数据模型模块:/modules

