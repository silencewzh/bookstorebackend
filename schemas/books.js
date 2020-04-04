var mongoose = require('mongoose');

//声明对象
var BooksSchema=new mongoose.Schema({
  tag:String,//分类
  bookName:String,//书名
  writer:String, //作者
  price:Number,//价格
  brief:String,//简介
  details:String,//详情
  image:String ,//图片
  points:Number,//购买积分
  counts:Number,//数量
  
})

//用户的方法
BooksSchema.statics={
  //根据Id查找
  findById:function(id,callback){
    return this.find({id:id},callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  }
}

module.exports=BooksSchema