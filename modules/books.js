var mongoose = require('mongoose')
var BooksSchema = require('../schemas/books') //拿到导出的数据集模块
var Books = mongoose.model('Books', BooksSchema) // 编译生成Movie 模型
 
 module.exports = Books