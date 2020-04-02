var mongoose = require('mongoose');

//声明对象
var UsesSchema=new mongoose.Schema({
  name:String,
  id:String,

})

UsesSchema.statics={
  
}

module.exports=UsesSchema