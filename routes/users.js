var express = require('express');
var router = express.Router();

/* GET users listing. */
var data = {
  message: '消息',
  data: [
    {
      name: '小明',
      age: 20
    },
    {
      name: '小红',
      age: 22
    },
    {
      name: '小刚',
      age: 24
    }
  ]
}

router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
