"use strict";
exports.__esModule = true;
const express = require("express"),
      fs      = require("fs"),
      app     = express()

const BACKGROUNDURL = 'http://127.0.0.1:9999/background/'
{ // 图片上传区域
  const multer  = require("multer")
  const storage = multer.diskStorage({
    destination: function(req, file, cb) { // 存放目录配置
      cb(null, './uploads');
    },
    filename: function(req, file, cb) { // 重命名配置
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  const upload = multer({ storage: storage });
  // 处理上传图片请求
  app.post('/uploadimg', upload.array('imgfile', 40), function(req, res, next) {
    const files = req.files
    res.set('Access-Control-Allow-Origin','*');
    if (files.length < 0) {
      console.log('遇到未知上传错误')
      res.send('error');
    } else {
      console.log('文件上传成功:')
      console.log(files);
      res.send(BACKGROUNDURL + files[0].filename);
    }
  })
}

{
  app.post('/getBackgroundList', function (req, res) {
    res.set('Access-Control-Allow-Origin','*');
    fs.readdir('./uploads', (err, files) => {
      console.log(err,files)
      res.send({err, url: BACKGROUNDURL, files});
    })
  });
}

// 处理获取背景图片请求
app.use('/background', express.static('uploads'));


// 服务器实例
const server = app.listen(9999, 'localhost', function() {
  console.log('服务正在监听9999端口!');
});