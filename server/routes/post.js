const express = require('express');
const Post = require('../model/Posts')
// const product = require('../json/index')
const router = express.Router();

router.get('/api', function(req, res, next) {
  Post.find({}, (err, data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(data)
    }
  })
});
router.get('/api/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, (err, data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data)
      res.redirect('/post/api')
    }
  })
});
router.post('/api', function(req, res, next) {
  let product = new Post(req.body)
  console.log(req.body);
  product.save((err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
      res.redirect('/admin')
    }
  })
});




module.exports = router;