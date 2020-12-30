const express = require("express");
const router = express.Router();
const Product = require("../model/Products");
// ============== rasim images fayiliga yuklash jarayoni   ==============
const upload = require("../helper/file");
// ============== rasim images fayiliga yuklash jarayoni   ==============
const Users = require("../model/User");

const Post = require("../model/Posts");

const Carousel = require("../model/Carousel");

const eA = require('../helper/eA')
// ======== Add Product +======================

router.get("/", eA, (req, res, next) => {
  res.render("admin", { title: "Admin" });
});

router.post('/',upload.single("img"),(req,res, next)=>{
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    sale: req.body.sale,
    description: req.body.description,
    category: req.body.category,
    gender: req.body.gender,
    img:req.file.filename
  })
  product.save((err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
      res.redirect("/admin");
      req.flash('success', "Maxsulot muaffaqiyatli qo'shildi")
    }
  })
})

// ======== Add Product +======================


router.get("/product",eA, (req, res, next) => {
  Product.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { title: "Admin", product: data });
    }
  });
});
//  =============== findById production ======================

router.get("/product/edit/:id",eA, (req, res, next) => {
  Product.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("product_id", {
        title: data.name,
        product: data,
      });
    }
  });
});

router.get("/product/delete/:id",eA, function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin");
      req.flash("success", "Muaffaqiayatli maxsulot o'chirildi");
    }
  });
});

//  =============== METHOD POST EDIT PRODUCT ================
router.post("/product/edit/:id", upload.single("img"), (req, res, next) => {
  let user = {
    name: req.body.name,
    price: req.body.price,
    sale: req.body.sale,
    description: req.body.description,
    category: req.body.category,
    gender: req.body.gender,
  };

  const account = Product.findById(req.params.id);
  console.log(req.file);
  if (req.file) {
    user.img = "./img/" + req.file.filename;
  }
  const query = { _id: req.params.id };
  Product.updateOne(query, user, (err) => {
    if (err) console.log(err);
    else {
      req.flash("success", "Аккаунт успешно редактировано");
      res.redirect("/admin");
    }
  });
});

//  =============== METHOD POST EDIT PRODUCT ================
router.get('/carousel',eA, (req,res,next)=>{
  let carousel = Carousel.find({}, (err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('addCarousel', {
        title:'admin carousel',
        data:data
      })
    }
  })
})
// ============= add carousel =============

router.post('/carousel', (req,res,next)=>{
  let carousel = new Carousel(req.body)
  carousel.save((err,date)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(date);
      res.redirect('/admin/carousel')
      req.flash('success', 'Carousel Muaffaqiyatli qo\'\shildi')
    }
  })
})

// ============= add carousel =============


//  =================== delete carousel ==============
router.get('/carousel/delete/:id',eA, (req,res,next)=>{
  Carousel.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin/carousel");
      req.flash("success", "Muaffaqiayatli maxsulot o'chirildi");
    }
  });
})

//  =================delete carousel ============


//  =============== findById production ======================

//  ============ COMMUNITY ===================
router.get('/community', (req,res,next)=>{
  Post.find({}, (err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('community', {
        title:"ADD POSTS", 
        data:data
      })
    }
  })
})
router.post('/community', (req,res,next)=>{
  const post = new Post(req.body)
  post.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/admin/community')
      req.flash('info', "POST muaffaqiyatli qoshildi")
    }
  })
})
router.get('/community/:id', (req,res,next)=>{
  Post.findByIdAndRemove(req.params.id, (err, data)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/admin/community')
    }
  })
})
router.post("/community/edit/:id",  (req, res, next) => {
  let user = {
    name: req.body.name,
    description: req.body.description,
    img:req.body.img
  };

  const account = Post.findById(req.params.id);
  const query = { _id: req.params.id };
  Post.updateOne(query, user, (err) => {
    if (err) console.log(err);
    else {
      req.flash("success", "POST успешно редактировано");
      res.redirect("/admin/community");
    }
  });
});


module.exports = router;
