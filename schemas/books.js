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

//书目的方法
BooksSchema.statics={
  //根据书名查找
  findByName:function(name,callback){
    return this.find({bookName:name},callback)
  },
  //根据书类别查找
  findByTag:function(tag,callback){
    return this.find({tag:tag},callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  },
  //更新书的数量
  updateBookCount:function(name,count,callback){
    return this.updateOne({bookName:name}, {$set:{counts: count}}, callback);
  },
  //删除书目
  deleteByName:function(name,callback){
    return this.deleteOne({bookName:name},callback);
  }
}

module.exports=BooksSchema
