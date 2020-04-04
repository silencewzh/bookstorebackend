var mongoose = require('mongoose');

//声明对象
var UsersSchema=new mongoose.Schema({
  name:String,//昵称
  sex:String,//性别
  id:String,//账号
  email:String,//邮箱
  passwaord:String,//密码
  cartbooks:[],//购物车书目列表
  buyhistory:[],//购买书历史
  points:Number,//用户积分
})

//用户的方法
UsersSchema.statics={
  //根据Id查找
  findById:function(id,callback){
    return this.find({id:id},callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  }
}

module.exports=UsersSchema