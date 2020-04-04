
var mongoose=require('mongoose');
var Users = require('../modules/users');
var Activity = require('../modules/activity');
var Books=require('../modules/books');
mongoose.connect('mongodb://localhost/test') //连接本地数据库


var user1=new Users({
  name:'Bob',//昵称
  sex:'male',//性别
  id:'test1',//账号
  email:'123@qq.com',//邮箱
  passwaord:'123456',//密码
  cartbooks:['五年高考三年模拟英语（全国一卷）'],//购物车书目列表
  buyhistory:['五年高考三年模拟英语（全国一卷）'],//购买书历史
  points:300,//用户积分
})
user1.save(function(err){
  if(err){console.log(err);}
  else{console.log('created');}
})


// var books1=new Books({
//   tag:'教科书',//分类
//   bookName:'五年高考三年模拟英语（全国一卷）',//书名
//   writer:'教育科学出版社', //作者
//   price:70.8,//价格
//   brief:'曲一线2020B版 高考英语 五年高考三年模拟（全国卷Ⅰ及上海适用）5年高考3年模拟 五三B版专项测试 五年高考',//简介
//   details:'',//详情
//   image:"wusan_english.jpg" ,//图片
//   points:7,//购买积分
//   counts:20,//数量
  
// })
// books1.save(function(err){
//   if(err){console.log(err);}
//   else{console.log('created');}
// })



// var activity1=new Activity({
//   id:'1',
//   tags:'优惠活动' ,
//   details:'买相应分类书籍满一百元人民币即可立减五十元人民币',
//   brief:'满一百立减五十',
  
// })
// activity1.save(function(err){
//   if(err){console.log(err);}
//   else{console.log('created');}
// })

