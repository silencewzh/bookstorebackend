var mongoose = require('mongoose');

//声明对象
var UsersInfoSchema=new mongoose.Schema({
  cartbooks:[],
  buyhistory:[],
})

//UsersSchema.method.
UsersInfoSchema.statics={
  findByName:function(name,callback){
    return this.find({name:name},callback)
  }
}

module.exports=UsersInfoSchema