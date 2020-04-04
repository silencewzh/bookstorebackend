var mongoose = require('mongoose')
var ActivitySchema = require('../schemas/activity') //拿到导出的数据集模块
var Activity = mongoose.model('Activity', ActivitySchema) // 编译生成Movie 模型
 
 module.exports = Activity