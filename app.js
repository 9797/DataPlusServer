"use strict";
exports.__esModule = true;
const express    = require("express"),
      chalk      = require('chalk'),
      fs         = require("fs"),
      low        = require('lowdb'),
      app        = express()

const BACKGROUNDURL = 'http://127.0.0.1:9999/background/'
const db = low('.\\database\\config.json')


// -----------------------------------图片上传区域-----------------------------------
{ 
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
      const data = {
        err: null,
        fileName: BACKGROUNDURL + files[0].filename
      }
      res.send(data);
    }
  })
}

// -----------------------------------背景图片区域-----------------------------------
{
  // 处理获取背景图片列表请求
  app.get('/getBackgroundList', function (req, res) {
    res.set('Access-Control-Allow-Origin','*');
    fs.readdir('./uploads', (err, files) => {
      res.send({err, url: BACKGROUNDURL, files});
    })
  });
  // 处理获取背景图片请求
  app.use('/background', express.static('uploads'));
}

// -----------------------------------屏幕配置区域-----------------------------------
{
  // 处理设置屏幕配置请求
  app.post('/setScreenConfig', function (req, res) {
    let body = '';
    res.set('Access-Control-Allow-Origin','*');
    req.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    req.on('end', function () {
      // 产生随机字符串方法
      function randomWord(num) {
        const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let   str = ""
        // 随机产生
        for(let i = 0; i < num; i++){
          const pos = Math.round(Math.random() * (arr.length-1));
          str += arr[pos];
        }
        return str;
      }
      const id = randomWord(8)
      const data = {
        id: id,
        name: '新建屏幕',
        data: JSON.parse(body)
      }
      console.log(chalk.gray('[getScreenConfig]设置数据:'))
      console.log(data)
      db.defaults({ screen: {} }).write()
      db.set(`screen.${id}`, data).write()
      res.send({err: null, id: id});
    })
  });

  // 处理获取屏幕配置请求
  app.post('/getScreenConfig', function (req, res) {
    let body = '';
    res.set('Access-Control-Allow-Origin','*');
    req.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    req.on('end', function () {
      const key = JSON.parse(body).key
      const screenConfig = db.get('screen').value()
      const data = {
        err: null,
        data: screenConfig[key - 1]
      }
      console.log(chalk.gray('[getScreenConfig]返回数据:'))
      console.log(data.data)
      res.send(JSON.stringify(data));
    })
  });

  // 处理获取屏幕配置请求
  app.get('/getScreenNumber', function (req, res) {
    res.set('Access-Control-Allow-Origin','*');
    const value = db.get('screen').value()
    let brief = []
    for (let item in value) {
      brief.push({
        id: value[item].id,
        name: value[item].name
      })
    }
    res.send({err: null, brief: brief});
  });

  // 重命名屏幕
  app.post('/screenRename', function (req, res) {
    let body = '';
    res.set('Access-Control-Allow-Origin','*');
    req.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    req.on('end', function () {
      const data = JSON.parse(body)
      console.log(chalk.gray('[screenRename]重命名屏幕:'))
      console.log(data)
      db.set(`screen.${data.id}.name`, data.newName).write()
      res.send({err: null, name: data.newName});
    })
  });

  // 删除屏幕
  app.post('/delateScreen', function (req, res) {
    let body = '';
    res.set('Access-Control-Allow-Origin','*');
    req.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    req.on('end', function () {
      const id = JSON.parse(body).id
      console.log(chalk.gray('[delateScreen]删除屏幕:'))
      console.log(id)
      db.unset(`screen.${id}`).write()
      res.send({err: null});
    })
  });
}

// 服务器实例
const server = app.listen(9999, function() {
  console.log(chalk.gray('服务正在监听9999端口!'));
});