const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')
const Admin = require('../model/Admin')

//  ====== GET SIGN UP ADMIN ============

router.get('/signUp', function(req, res, next) {
  res.render('signup', { title: 'Registratsiya' });
});

//  ====== GET SIGN UP ADMIN ============
//  =========== POST SIGN UP ADMIN ===========
router.post('/signUp', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  req.checkBody('username', 'username bosh bolmasligi kerak').notEmpty()
  req.checkBody('password', 'password bosh bolmasligi kerak').notEmpty()
  const errors = req.validationErrors();
  if (errors) {
      res.render('register', {
          title: 'Controller when adding music',
          errors: errors
      })
  } else {
      const userAdd = new Admin({
          username: username,
          password: password
      })
      bcrypt.genSalt(10, (err, pass) => {
          bcrypt.hash(userAdd.password, pass, (err, hash) => {
              if (err) {
                  console.log(err);
              }
              userAdd.password = hash;
              userAdd.save((err, data) => {
                  if (err) {
                      console.log(err);
                  } else {
                      req.flash('info', 'Siz muvaffaqiyatli qoshildingiz aynan siz ekanligingizni iltimos tasdiqlang')
                      res.redirect('/admin/login')
                  }
              })
          })
      })
  }
})

//  =========== POST SIGN UP ADMIN ===========

//  ========== GET LOGIN ADMIN =========

router.get('/login', (req, res, next) => {
  res.render('login', {
      title: 'LOGIN',
  })
  req.flash('danger', { message })
})

//  ========== GET LOGIN ADMIN =========

// ============== route Login GET method ===============

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
      successRedirect: '/admin',
      failureRedirect: '/admin/login',
      failureFlash: true,
  })(req, res, next)
})

router.get('/logout', (req, res, next) => {
  req.logOut()
  req.flash('info', 'Muaffaqiyatli tizimdan chiqib ketdingiz')
  res.redirect('/admin/login')
})

router.get('/delete/:id', (req, res, next) => {
  Admin.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
          console.log(err);
      } else {
          req.flash('info ', `Muaffaqiyatli accountingiz o'chirildi`)
          res.redirect('/admin/login')
      }
  })

})


module.exports = router