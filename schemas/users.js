var mongoose = require('mongoose');

//声明对象
var UsersSchema=new mongoose.Schema({
  name:String,
  sex:String,
  id:String,
  passwaord:String
})

//UsersSchema.method.
UsersSchema.statics={
  findByName:function(name,callback){
    return this.find({name:name},callback)
  },
  listAll:function(callback){
    return this.find().sort().exec(callback);
  }
}

module.exports=UsersSchema