const express = require("express");
const Product = require("../model/Products");
const Carousel = require("../model/Carousel");
const Instagram = require("../model/Instagram");
const Background = require("../model/Background");


// const product = require('../json/index')
const router = express.Router();
let arr = [];
/* GET home page. */
router.get("/api", function (req, res, next) {
  Product.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
router.post("/api/post", function (req, res, next) {
  console.log(req.body);
});
router.get("/api/product/:id", (req, res) => {
  Product.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
router.post("/api/edit/:id", (req, res, next) => {
  const query = { _id: req.params.id };
  console.log(req.body);
  Product.updateOne(
    query,
    {
      $push:{comments:req.body}
    },
    (err, data) => {
      if (err) {
        console.log("error" + err);
      } else {
        console.log("success" + data);
      }
    }
  );
});
router.get('/api/carousel', (req,res)=>{
  Carousel.find({}, (err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
})
router.get('/api/insta', (req,res)=>{
  Instagram.find({}, (err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
})
router.get('/api/limit', (req,res)=>{
  Product.find({}, (err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data.reverse())
    }
  })
})
router.get('/api/back/:id', (req,res)=>{
  Background.aggregate([
    {
      $match:{
        name : req.params.id
      }
    }
  ],
    (err,data)=>{
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      }
    }
  )
})
module.exports = router;
