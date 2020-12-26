var express = require('express');
const Product = require('../model/Products')
// const product = require('../json/index')
var router = express.Router();
let arr = []
/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api', function(req, res, next) {
  Product.find({}, (err, data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(data)
    }
  })
});
router.post('/api/post', function(req, res, next) {
  console.log(req.body);
});
router.get('/api/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, (err, data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data)
      res.redirect('/api')
    }
  })
});
router.post('/', function(req, res, next) {
  let product = new Product(req.body)
  product.save((err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
      res.redirect('/')
    }
  })
});
router.get('/api/product/:id', (req,res)=>{
  Product.findById(req.params.id, (err, data)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(data)
    }
  })
})
module.exports = router;
