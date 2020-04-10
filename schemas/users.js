var mongoose = require('mongoose');

//声明对象
var UsersSchema=new mongoose.Schema({
  name:String,//昵称
  sex:String,//性别
  id:String,//账号
  email:String,//邮箱
  password:String,//密码
  cartBooks:[],//购物车书目列表
  buyHistory:[],//购买书历史
  points:Number,//用户积分
});

//用户的方法
UsersSchema.statics={
  //根据Id查找
  findById:function(id,callback){
    return this.findOne({id:id},callback)
  },
  // 根据ID查找
  distinctById: function(id, callback){
    return this.distinct('id', {id: id}, callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  },
  // 获得姓名和性别
  getUserInfo: function(id, callback){
    return this.where('id').equals(id).select('name sex').exec(callback);
  },
  // 更新姓名和性别
  refreshUserInfo: function(id, name, sex, callback) {
    return this.updateOne({id:id}, {$set:{name: name, sex: sex}}, callback);
  },
  // 更新密码
  resetPassword:function(id, oldPassword, newPassword, callback) {
    return this.updateOne({id:id, password: oldPassword}, {$set:{password: newPassword}}, callback);
  },
  // 更新邮箱
  resetEmail:function(id, oldEmail, newEmail, callback) {
    return this.updateOne({id:id, password: oldEmail}, {$set:{password: newEmail}}, callback);
  },
  // 更新购物车
  updateShoppingCart:function(id, cartBooks, callback) {
    return this.updateOne({id:id}, {$set:{cartBooks: cartBooks}}, callback);
  },
  // 添加到购物车
  addToShoppingCart:function(id, book, callback) {
    return this.updateOne({id:id}, {$set:{cartBooks: this.cartBooks.push(book)}}, callback);
  },

  //更新积分
  updatePoints:function(name,points,callback){
    return this.updateOne({name:name},{$set:{points: points}},callback);
  }
};
module.exports=UsersSchema;
