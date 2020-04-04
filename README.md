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

例子可见:
1.首先在/schemas/users.js 定义用户 其中包括字段和函数（应用到所有users中） 导出为UsersSchema
2.在/modules/users.js 将其转换为模型，导出为Users
3.在路由文件（具体操作数据的地方）中，引入moongoose以及模型var Users = require('../modules/users'); （ moongoose已经在app.js 中引入并连接上）

一般在schema的方法中带上callback参数，可以在具体操作js中写回调函数
在具体操作函数里，第一个参数带上err 判断是否出错并打印，便于调试
moongoose api：
http://www.mongoosejs.net/docs/api.html#document_Document-save
参考链接：
https://www.cnblogs.com/paul123/p/5396290.html

暂时解决图片显示：
app.js中将静态文件夹暴露