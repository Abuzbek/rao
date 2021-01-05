const express = require("express");
const router = express.Router();
const Product = require("../model/Products");
// ============== rasim images fayiliga yuklash jarayoni   ==============
const upload = require("../helper/file");
const toDeleteFile = require("../helper/toDelete");

// ============== rasim images fayiliga yuklash jarayoni   ==============
const Users = require("../model/User");

const Post = require("../model/Posts");
const Admins = require("../model/Admin");
const Instagram = require("../model/Instagram");
const Background = require("../model/Background");


const Carousel = require("../model/Carousel");

const eA = require("../helper/eA");
// ======== Add Product +======================

router.get("/", eA, (req, res, next) => {
  res.render("admin", { title: "Admin" });
});

router.post("/", upload.single("img"), (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    sale: req.body.sale,
    description: req.body.description,
    category: req.body.category,
    gender: req.body.gender,
    img: "/img/" + req.file.filename,
  });
  product.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin");
      req.flash("success", "Maxsulot muaffaqiyatli qo'shildi");
    }
  });
});

// ======== Add Product +======================

router.get("/product", eA, (req, res, next) => {
  Product.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { title: "Admin", products: data });
    }
  });
});
//  =============== findById production ======================

router.get("/product/edit/:id", eA, (req, res, next) => {
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

router.get("/product/:id/comments", eA, (req, res, next) => {
  Product.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("product_id_comments", {
        title: data.name,
        product: data,
      });
    }
  });
});
router.get('/product/:id/images', eA,(req,res)=>{
  Product.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("product_id_images", {
        title: data.name,
        product: data,
      });
    }
  });
})
//  ============ add Product images ==============

router.post('/product/image/:id',upload.single("img"), (req,res)=>{
  const query = { _id: req.params.id };
  console.log(req.body);
  Product.updateOne(
    query,
    {
      $push:{image:{img:'/img/'+req.file.filename}}
    },
    (err, data) => {
      if (err) {
        console.log("error" + err);
      } else {
        console.log("success" + data);
        res.redirect("/admin/product/edit/" + req.params.id)
      }
    }
  );
})

//  ============ add Product images ==============

//  ============= delete Product Comments ============
router.post("/comment/delete/:id", (req, res) => {
  const query = { _id: req.params.id };
  console.log(Object(req.body.object));
  Product.updateOne(
    query,
    {
      $pull: {
        comments: {
          name: req.body.name,
          comment: req.body.comment,
          img: req.body.img,
        },
      },
    },
    (err, data) => {
      if (err) {
        console.log("error" + err);
      } else {
        console.log("success" + data);
        toDeleteFile(req.body.img);
        res.redirect("/admin/product/edit/" + req.params.id);
        req.flash("info", "comment o'chirildi");
      }
    }
  );
});
router.post("/image/delete/:id", (req, res) => {
  const query = { _id: req.params.id };
  Product.updateOne(
    query,
    {
      $pull: {
        image: {
          img: req.body.img,
        },
      },
    },
    (err, data) => {
      if (err) {
        console.log("error" + err);
      } else {
        console.log("success" + data);
        toDeleteFile(req.body.img);
        res.redirect("/admin/product/edit/" + req.params.id);
        req.flash("info", "image o'chirildi");
      }
    }
  );
});
//  ============= delete Product Comments ============

router.get("/product/delete/:id", eA, function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin");
      req.flash("success", "Muaffaqiayatli maxsulot o'chirildi");
      toDeleteFile(data.img)
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
    img: "",
  };

  const account = Product.findById(req.params.id, (err, data)=>{
    if (err) {
      console.log(err);
    } else {
      if (data.img) {
        toDeleteFile(data.img);
      }
    }
  });
  console.log(req.file);
  if (req.file) {
    user.img = `/img/${req.file.filename}`;
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
router.get("/carousel", eA, (req, res, next) => {
  let carousel = Carousel.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("addCarousel", {
        title: "admin carousel",
        data: data,
      });
    }
  });
});
// ============= add carousel =============

router.post("/carousel", upload.single("img"), (req, res, next) => {
  let carousel = new Carousel({
    img: "/img/" + req.file.filename,
  });
  carousel.save((err, date) => {
    if (err) {
      console.log(err);
    } else {
      console.log(date);
      res.redirect("/admin/carousel");
      req.flash("success", "Carousel Muaffaqiyatli qo'shildi");
    }
  });
});

// ============= add carousel =============

//  =================== delete carousel ==============
router.get("/carousel/delete/:id", eA, (req, res, next) => {
  Carousel.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      toDeleteFile(data.img)
      res.redirect("/admin/carousel");
      req.flash("success", "Muaffaqiayatli maxsulot o'chirildi");
    }
  });
});

//  =================delete carousel ============
//  =============== METHOD POST EDIT PRODUCT ================
router.get("/insta", eA, (req, res, next) => {
  let carousel = Instagram.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("addInsta", {
        title: "admin Instagram",
        data: data,
      });
    }
  });
});
// ============= add carousel =============

router.post("/insta", upload.single("img"), (req, res, next) => {
  let carousel = new Instagram({
    img: "/img/" + req.file.filename,
  });
  carousel.save((err, date) => {
    if (err) {
      console.log(err);
    } else {
      console.log(date);
      res.redirect("/admin/insta");
      req.flash("success", "Carousel Muaffaqiyatli qo'shildi");
    }
  });
});

// ============= add carousel =============

//  =================== delete carousel ==============
router.get("/insta/delete/:id", eA, (req, res, next) => {
  Instagram.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      toDeleteFile(data.img)
      res.redirect("/admin/insta");
      req.flash("success", "Muaffaqiayatli maxsulot o'chirildi");
    }
  });
});

//  =================delete carousel ============
//  =============== findById production ======================

//  ============ COMMUNITY ===================
router.get("/community",eA, (req, res, next) => {
  Post.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("community", {
        title: "ADD POSTS",
        data: data,
      });
    }
  });
});
router.post("/community", upload.single("img"), (req, res, next) => {
  console.log(req.file, req.body);
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
    img: "/img/" + req.file.filename,
  });
  post.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin/community");
      req.flash("info", "POST muaffaqiyatli qoshildi");
    }
  });
});
router.get("/community/:id",eA, (req, res, next) => {
  Post.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      toDeleteFile(data.img)
      res.redirect("/admin/community");
    }
  });
});
router.post("/community/edit/:id", upload.single("img"), (req, res, next) => {
  let user = {
    name: req.body.name,
    description: req.body.description,
    img: '',
  };
  console.log(req.file);
  if (req.file) {
    user.img = `/img/${req.file.filename}`;
  }
  const query = { _id: req.params.id };
  Post.updateOne(query, user, (err) => {
    if (err) console.log(err);
    else {
      req.flash("success", "POST успешно редактировано");
      toDeleteFile(data.img)
      res.redirect("/admin/community");
    }
  });
});
//  =========== users checkout ============
router.post("/user_chechout", (req, res, next) => {
  const user = new Users(req.body);
  user.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});
router.get("/clients",eA, (req, res, next) => {
  Users.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("clients", {
        title: "Client Page",
        product: data,
      });
    }
  });
});
router.get("/clients/delete/:id",eA, (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/admin/clients");
      req.flash("success", "user muaffaqiyatli o'chdi");
    }
  });
});

//   ============ Admins ==============

router.get("/admins",eA, (req, res) => {
  Admins.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admins", {
        data: data,
        title: "Adminstrators",
      });
    }
  });
});
router.get("/admins/:id",eA, (req, res) => {
  Admins.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/admin/admins')
      req.flash('success', "muaffaqiyatli tizimdan chiqarildi")
    }
  });
});

//   ============ Admins ==============
router.get("/background",eA, (req, res) => {
  Background.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("background", {
        data: data,
        title: "Page Background",
      });
    }
  });
});
router.post("/background",upload.single('img') ,(req, res) => {
  const back = new Background({
    img:'/img/'+req.file.filename,
    name:req.body.name
  })
  back.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/admin/background')
    }
  })
});
router.post("/back/edit/:id", upload.single("img"), (req, res, next) => {
  let user = {
    img: '',
  };
  console.log(req.file);
  if (req.file) {
    user.img = `/img/${req.file.filename}`;
  }
  const query = { _id: req.params.id };
  Background.updateOne(query, user, (err) => {
    if (err) console.log(err);
    else {
      req.flash("success", "Background успешно редактировано");
      res.redirect("/admin/back");
    }
  });
});
router.get("/back/:id",eA, (req, res, next) => {
  Background.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      toDeleteFile(data.img)
      res.redirect("/admin/background");
    }
  });
});
module.exports = router;
