var mongoose = require('mongoose');

//声明对象
var ActivitySchema=new mongoose.Schema({
  id:String,
  tags:String ,
  details:String,
  brief:String,
})

//用户的方法
ActivitySchema.statics={
  //根据Id查找
  findById:function(id,callback){
    return this.find({id:id},callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  }
}

module.exports=ActivitySchema