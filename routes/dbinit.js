
var mongoose=require('mongoose');
var Users = require('../modules/users');
var Activity = require('../modules/activity');
var Books=require('../modules/books');
mongoose.connect('mongodb://localhost/test') //连接本地数据库


var user1=new Users({
  name:'Bob',//昵称
  sex:'male',//性别
  id:'test1',//账号
  email:'123@qq.com',//邮箱
  password:'123456',//密码
  cartBooks:[{bookName: 'aaa1',price:12, buyNum: 2},{bookName: 'aaa',price:11, buyNum: 1}], //购物车书目列表
  buyHistory:[{bookName: 'ccc',price:12, buyNum: 2, dealStatus: '已购买'},{bookName: 'ddd',price:12, buyNum: 1,  dealStatus: '配送中'}],//购买书历史
  points:300,//用户积分
})
user1.save(function(err){
  if(err){console.log(err);}
  else{console.log('user1');}
})



var user2=new Users({
  name:'Adam',//昵称
  sex:'male',//性别
  id:'test2',//账号
  email:'456@qq.com',//邮箱
  password:'123456',//密码
  cartBooks:[{bookName: 'aaa1',price:12, buyNum: 2},{bookName: 'aaa',price:11, buyNum: 1}], //购物车书目列表
  buyHistory:[{bookName: 'ccc',price:12, buyNum: 2, dealStatus: '已购买'},{bookName: 'ddd',price:12, buyNum: 1,  dealStatus: '配送中'}],//购买书历史
  points:30,//用户积分
})
user2.save(function(err){
  if(err){console.log(err);}
  else{console.log('user2');}
})


var user3=new Users({
  name:'wzh',//昵称
  sex:'male',//性别
  id:'test3',//账号
  email:'wangzhihao106@qq.com',//邮箱
  password:'123456',//密码
  cartBooks:[{bookName: 'aaa1',price:12, buyNum: 2},{bookName: 'aaa',price:11, buyNum: 1}], //购物车书目列表
  buyHistory:[{bookName: 'ccc',price:12, buyNum: 2, dealStatus: '已购买'},{bookName: 'ddd',price:12, buyNum: 1,  dealStatus: '配送中'}],//购买书历史
  points:60,//用户积分
})
user3.save(function(err){
  if(err){console.log(err);}
  else{console.log('user3');}
})

var user4=new Users({
  name:'Sunny',//昵称
  sex:'female',//性别
  id:'test4',//账号
  email:'1234567@qq.com',//邮箱
  password:'123456',//密码
  cartBooks:[{bookName: 'aaa1',price:12, buyNum: 2},{bookName: 'aaa',price:11, buyNum: 1}], //购物车书目列表
  buyHistory:[{bookName: 'ccc',price:12, buyNum: 2, dealStatus: '已购买'},{bookName: 'ddd',price:12, buyNum: 1,  dealStatus: '配送中'}],//购买书历史
  points:0,//用户积分
})
user4.save(function(err){
  if(err){console.log(err);}
  else{console.log('user4');}
})


var user5=new Users({
  name:'qwer',//昵称
  sex:'female',//性别
  id:'a',//账号
  email:'1234567@qq.com',//邮箱
  password:'a',//密码
  cartBooks:[],//购物车书目列表
  buyHistory:[],//购买书历史
  points:0,//用户积分
})
user5.save(function(err){
  if(err){console.log(err);}
  else{console.log('user4');}
})

var books1=new Books({
  tag:'考试',//分类
  bookName:'五年高考三年模拟英语（全国一卷）',//书名
  writer:'教育科学出版社', //作者
  price:70.8,//价格
  brief:'曲一线2020B版 高考英语 五年高考三年模拟（全国卷Ⅰ及上海适用）5年高考3年模拟 五三B版专项测试 五年高考',//简介
  details:'',//详情
  image:"wusan_english.jpg" ,//图片
  points:70,//购买积分
  counts:20,//数量

})
books1.save(function(err){
  if(err){console.log(err);}
  else{console.log('book1');}
})


var books2=new Books({
  tag:'工具书',//分类
  bookName:'手机摄影从小白到高手 手机摄影大师练成必读',//书名
  writer:'杨精坤 ', //作者
  price:41.8,//价格
  brief:'手机摄影大师练成必读',//简介
  details:'通过浅显易懂的视频教学讲授手机摄影的核心方法，用简单直白的语言讲解那些看起来很 高级 的照片的拍摄技巧。下一张精彩照片就出自你手！手机摄影从小白到大师的练成之路',//详情
  image:"phone_photo.jpg" ,//图片
  points:41,//购买积分
  counts:5,//数量

})
books2.save(function(err){
  if(err){console.log(err);}
  else{console.log('book2');}
})


var books3=new Books({
  tag:'文学',//分类
  bookName:'我不怕这漫长黑夜',//书名
  writer:'苑子豪，果麦文化', //作者
  price:22.5,//价格
  brief:'何炅，韩寒真挚推荐，吴昕，尼格买提，肖央，魏大勋感动阅读，愿在孤单迷茫中，我们的坚持都被照亮',//简介
  details:'七篇寻光故事，七种奇遇人生，送给成长路上孤独前行的你，每个人的生活都有被困在井里一样的绝望时刻，而这本书就想做点亮黑夜的那束光芒。耐心一些，保持相信，我们终会穿越漫长黑夜，抵达属于自己的黎明。',//详情
  image:"wbpzmchy.jpg" ,//图片
  points:22,//购买积分
  counts:50,//数量

})
books3.save(function(err){
  if(err){console.log(err);}
  else{console.log('book3');}
})



var books4=new Books({
  tag:'工具书',//分类
  bookName:'现代汉语词典(第7版)',//书名
  writer:'中国社会科学院语言研究所词典编辑室 ', //作者
  price:92.8,//价格
  brief:'一部久享盛誉的规范型词典',//简介
  details:'《现代汉语词典》自1978年正式出版以来做过多次修订，以适应社会的发展，更好地反映现代汉语词汇新面貌，体现有关学科研究的新成果，落实国家有关语言文字方面的新规范。',//详情
  image:"xdhycd.jpg" ,//图片
  points:92,//购买积分
  counts:100,//数量

})
books4.save(function(err){
  if(err){console.log(err);}
  else{console.log('book4');}
})


var books5=new Books({
  tag:'艺术',//分类
  bookName:'华夏万卷字帖',//书名
  writer:'田英章', //作者
  price:13.1,//价格
  brief:'汉字书写一站式解决方案',//简介
  details:'正楷一本通田英章书 楷书硬笔书法学生成人钢笔字帖 大学男女生临摹描红手写体',//详情
  image:"hxwjzt.jpg" ,//图片
  points:13,//购买积分
  counts:18,//数量

})
books5.save(function(err){
  if(err){console.log(err);}
  else{console.log('book5');}
})


var books6=new Books({
  tag:'文学',//分类
  bookName:'福尔摩斯探案集',//书名
  writer:'柯南 道尔，童趣出版有限公司', //作者
  price:13.4,//价格
  brief:'中小学新课标必读名著）130000多名读者热评',//简介
  details:'《福尔摩斯探案集》可谓是开辟了侦探小说历史 “黄金时代”，一百多年来被译成57种文字，风靡全世界，是历*受读者推崇的侦探小说。小说中的福尔摩斯已成为世界上家喻户晓的人物，福尔摩斯的人物性格和形象被塑造的生动、饱满，能让读者读完全书之后相信这个人物是真实存在的。',//详情
  image:"femstaj.jpg" ,//图片
  points:13,//购买积分
  counts:28,//数量

})
books6.save(function(err){
  if(err){console.log(err);}
  else{console.log('book6');}
})


var books7=new Books({
  tag:'传记',//分类
  bookName:'假如给我三天光明',//书名
  writer:'海伦 凯勒 ', //作者
  price:11.1,//价格
  brief:'一部久享盛誉的规范型词典',//简介
  details:'无障碍阅读彩插励志版《假如给我三天光明》是新课标必读丛书。《假如给我三天光明》是海伦 凯勒的自传作品。',//详情
  image:"jrgwstgm.jpg" ,//图片
  points:11,//购买积分
  counts:56,//数量

})
books7.save(function(err){
  if(err){console.log(err);}
  else{console.log('book7');}
})


var books8=new Books({
  tag:'教材',//分类
  bookName:'数学原来可以这样学',//书名
  writer:'野口哲典', //作者
  price:29.2,//价格
  brief:'畅销日本300万册，小学生家长必备。让孩子爱上数学的神奇魔法书！',//简介
  details:'老师不会教的学习方法，孩子一学就开窍，就连数学不好的父母也能教出100分的孩子！',//详情
  image:"sxylkyzyx.jpg" ,//图片
  points:29,//购买积分
  counts:83,//数量

})
books8.save(function(err){
  if(err){console.log(err);}
  else{console.log('book8');}
})


var books9=new Books({
  tag:'文学',//分类
  bookName:'骆驼祥子',//书名
  writer:'老舍', //作者
  price:11.8,//价格
  brief:'统编语文教科书七年级（下）指定阅读篇目',//简介
  details:'《骆驼祥子》是老舍先生的代表作之一，也是老舍自己钟爱的作品。老舍是满族正红旗人，出生在北京西城小杨家胡同的一个城市贫民家庭。他是现代著名的作家、杰出的语言大师，被誉为“人民艺术家”。《骆驼祥子》问世后蜚声文坛，标志着老舍现实主义风格的形成，达到了他小说创作的*  高成就，也是我国现代文学史上优秀的长篇小说之一，曾先后被译成十几种外文。',//详情
  image:"ltxz.jpg" ,//图片
  points:11,//购买积分
  counts:81,//数量

})
books9.save(function(err){
  if(err){console.log(err);}
  else{console.log('book9');}
})



var books10=new Books({
  tag:'文学',//分类
  bookName:'活着',//书名
  writer:'余华', //作者
  price:19.3,//价格
  brief:'荣获中国版权金奖.作品奖版本，销量逾千万册',//简介
  details:'余华是我国当代著名作家，也是享誉世界的小说家，曾荣获众多国内外奖项。《活着》是其代表作，在全球广泛传播，销量逾千万册，获得了普遍好评，已成为中国乃至世界当代文学的经典。',//详情
  image:"hz.jpg" ,//图片
  points:19,//购买积分
  counts:133,//数量

})
books10.save(function(err){
  if(err){console.log(err);}
  else{console.log('book10');}
})

var books11=new Books({
  tag:'自传',//分类
  bookName:'人间失格',//书名
  writer:'太宰治', //作者
  price:9.2,//价格
  brief:'日本小说家太宰治的自传体小说',//简介
  details:'超燃！“丧文化”流行，《人间失格》成了现象级畅销书，创当当3天销售50000+册的奇迹！收录作者绝笔之作《Good bye》。一个“丧失为人资格”少年的心灵独白，一个对村上春树影响至深的绝望凄美故事。',//详情
  image:"rjsg.jpg" ,//图片
  points:9,//购买积分
  counts:63,//数量

})
books11.save(function(err){
  if(err){console.log(err);}
  else{console.log('book11');}
})


var books12=new Books({
  tag:'文学',//分类
  bookName:'百年孤独',//书名
  writer:'马尔克斯', //作者
  price:39.2,//价格
  brief:'50周年纪念版',//简介
  details:'50周年纪念版！全新典藏内封，限量赠50周年精美魔幻明信片1套。马尔克斯代表作，全球惟一正式授权中文版，未作任何删节！6年发行量超600万册！',//详情
  image:"bngd.jpg" ,//图片
  points:39,//购买积分
  counts:153,//数量

})
books12.save(function(err){
  if(err){console.log(err);}
  else{console.log('book12');}
})




var books13=new Books({
  tag:'文学',//分类
  bookName:'追风筝的人',//书名
  writer:'卡勒德·胡赛尼', //作者
  price:18,//价格
  brief:'2018年新版',//简介
  details:'“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”',//详情
  image:"zfzdr.jpg" ,//图片
  points:18,//购买积分
  counts:96,//数量

})
books13.save(function(err){
  if(err){console.log(err);}
  else{console.log('book13');}
})

var books14=new Books({
  tag:'历史',//分类
  bookName:'中国历史',//书名
  writer:'人民教育出版社', //作者
  price:18,//价格
  brief:'2018年新版',//简介
  details:'中国历史细度分析',//详情
  image:"aaa.png" ,//图片
  points:18,//购买积分
  counts:96,//数量

})
books14.save(function(err){
  if(err){console.log(err);}
  else{console.log('book14');}
})


var activity1=new Activity({
  id:'1',
  tags:'优惠活动' ,
  details:'买相应分类书籍满一百元人民币即可立减五十元人民币',
  brief:'满一百立减五十',

})
activity1.save(function(err){
  if(err){console.log(err);}
  else{console.log('event1');}
})

var activity2=new Activity({
  id:'2',
  tags:'开服公告' ,
  details:'4.4日清明节为国家英雄悼念',
  brief:'4.4清明节纪念',

})
activity2.save(function(err){
  if(err){console.log(err);}
  else{console.log('event2');}
})


var activity3=new Activity({
  id:'3',
  tags:'开发人员' ,
  details:'开发人员:汪志豪 黄文柯',
  brief:'开发人员',

})
activity3.save(function(err){
  if(err){console.log(err);}
  else{console.log('event3');}
})
