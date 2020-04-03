var mongoose = require('mongoose');

//声明对象
var UsersSchema=new mongoose.Schema({
  name:String,
  id:String,
  sex:String,
})

//UsersSchema.method.
UsersSchema.statics={
  findByName:function(name,callback){
    return this.find({name:name},callback)
  }
}

module.exports=UsersSchema