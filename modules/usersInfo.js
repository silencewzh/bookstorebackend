var mongoose = require('mongoose')
var UsersSchema = require('../schemas/usersInfo') //拿到导出的数据集模块
var UsersInfo = mongoose.model('UsersInfo', UsersInfoSchema) // 编译生成Movie 模型
 
 module.exports = UsersInfo