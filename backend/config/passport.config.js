var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const {getUserByEmail} = require('../services/user.service');

passport.use('user-local', new LocalStrategy({usernameField: 'email'},
    function (email, password, done) {
        getUserByEmail(email)
        .then((user) => {
            if(!user) {
                return done("Email or Password is incorrect.", null);
            } else if(password !== user.password) {
                return done("Password is incorrect.", null);
            }
            return done(null, user);
        }).catch((err) => {
            done(err.msg, null);
        })
    })
);