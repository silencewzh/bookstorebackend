var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入express，处理请求体的信息
var express = require('express')
//添加路由版块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksInfoRouter=require('./routes/booksInfo');
var activityRouter=require('./routes/activity');

var mongoose=require('mongoose');

var app = express();
// 解决跨域
app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 添加json解析
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//静态文件
app.use(express.static('public'));

//使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/booksInfo',booksInfoRouter);
app.use('/activity',activityRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb://localhost/test');//连接本地数据库
mongoose.connection.on('connected', function () {

  console.log('Mongoose connection open to '); }); /** * 连接异常 */

  mongoose.connection.on('error',function (err) {

  console.log('Mongoose connection error: ' + err); }); /** * 连接断开 */

  mongoose.connection.on('disconnected', function () {

  console.log('Mongoose connection disconnected'); });


module.exports = app;
