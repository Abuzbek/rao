// const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const Users = require('../model/Admin')
module.exports = (passport) => {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            Users.findOne({ username: username }, function (err, user) {
                // console.log(user);
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: `Username notog'ri kiritildi` });
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) console.log(err);
                    if (isMatch) {
                        done(null, user)
                    }
                    else {
                        done(null, false, { message: `parolingiz nato'gri` })
                    }
                })
            });
        }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        Users.findById(id, function (err, user) {
            done(err, user);
        });
    });
}